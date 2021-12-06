(ns ^:figwheel-load hello-world.main
  (:require [cljs.loader :as loader]
            [clojure.pprint :as pprint]
            [goog.dom :as gdom]
            [libhunam
             :refer
             [Comp fun SnackBarNotification]
             :rename
             {fun libhunam-fun, Comp LibhunamComp, SnackBarNotification hunamSnackBar}]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

(enable-console-print!)

(comment
  (loader/loaded? :big))

(defn app
  []
  (let [*loaded (r/atom (loader/loaded? :big))]
    [:div {:style {:margin "3em"}}
     [:p "CLJS + TS Hello Worlds"]
     [:pre (with-out-str (pprint/pprint {:libhunan/fun (libhunam-fun)}))]
     [:> LibhunamComp {:msg "hello"}]
     [:div {:style {:margin "1em 0 1em 0"}}
      [:>
       hunamSnackBar
       {:copy  "We’ve just sent you an email to reset your password!",
        :theme "green"}]]
     [:button {:on-click (fn [_]
                           (when-not @*loaded
                             (loader/load :big #(reset! *loaded true))))}
      [:span "Load " [:strong "big"] " module"]]
     (if @*loaded
       (let [comp @(resolve 'hello-world.big/app)] [comp])
       [:p {:style {:margin "2em 0 0 2em"}}
        "placeholder"])]))

(rdom/render [app] (gdom/getElement "app"))

(loader/set-loaded! :main)
