(ns ^:figwheel-load hello-world.main
  (:require
   [cljs.loader :as loader]
   [clojure.pprint :as pprint]
   [goog.dom :as gdom]
   [helix.core :refer [$ defnc]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [libhunam
    :refer
    [Comp fun SnackBarNotification]
    :rename
    {fun libhunam-fun, Comp LibhunamComp, SnackBarNotification hunamSnackBar}]
   [react-dom :as rdom]))

(enable-console-print!)

(comment
  (loader/loaded? :big))

(defnc app []
  (let [[loaded? setLoaded] (hooks/use-state (loader/loaded? :big))]
    (d/div {:style {:margin "3em"}}
     (d/p "CLJS + TS Hello Worlds")
     (d/pre (with-out-str (pprint/pprint {:libhunan/fun (libhunam-fun)})))
     ($ LibhunamComp {:msg "hello"})
     (d/div {:style {:margin "1em 0 1em 0"}}
      ($ hunamSnackBar
         {:copy  "We’ve just sent you an email to reset your password!",
          :theme "green"}))
     (d/button {:on-click (fn [_]
                            (when-not loaded?
                              (loader/load :big #(setLoaded true))))}
               (d/span "Load " (d/strong "big") " module"))
     (if loaded?
       (let [comp @(resolve 'hello-world.big/app)] ($ comp))
       (d/p {:style {:margin "2em 0 0 2em"}} "placeholder")))))

(rdom/render ($ app) (gdom/getElement "app"))

(loader/set-loaded! :main)
