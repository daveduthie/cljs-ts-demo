(ns ^:figwheel-load hello-world.main
  (:require [cljs.loader :as loader]
            [clojure.pprint :as pprint]
            [goog.dom :as gdom]
            [helix.core :refer [$ defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [libhunam :refer [Comp fun SnackBarNotification] :rename {fun libhunam-fun, Comp LibhunamComp, SnackBarNotification hunamSnackBar}]
            [react-dom :as rdom]))

(enable-console-print!)

(defnc app []
  (let [[bigComp setBigComp] (hooks/use-state nil)]
    (d/div {:style {:margin "3em"}}
     (d/p "CLJS + TS + Wasm Hello Worlds")
     (d/pre (with-out-str (pprint/pprint {:libhunan/fun (libhunam-fun)})))
     ($ LibhunamComp {:msg "hello"})
     ($ hunamSnackBar {:copy "We’ve just sent you an email to reset your password!" :theme "green"})
     (d/button
      {:on-click (fn [_]
                   (when-not (some? bigComp)
                     (loader/load :big
                                  #(setBigComp (constantly
                                                @(resolve
                                                  'hello-world.big/app))))))}
      (d/span "Load " (d/strong "big") " module"))
     (if-let [comp bigComp]
       ($ comp)
       (d/p {:style {:margin "2em 0 0 2em"}} "placeholder")))))

(rdom/render ($ app) (gdom/getElement "app"))

(loader/set-loaded! :main)
