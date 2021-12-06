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
            [reagent.dom :as rdom]
            [comp-cheq.forms :as forms]))

(enable-console-print!)

(comment
  (loader/loaded? :big))

(def example-fields
  [{:type      :text
    :path      [:text]
    :validation-path [:text-2]
    :label     "Text"
    :sub-label "A little something"}
   {:type      :phone
    :path      [:cell-phone]
    :label     "Cellphone"
    :optional? true}
   {:type "sa-id"
    :path [:my-id]
    :label "What is your RSA ID?"}
   {:type      "date-time"
    :path      [:when?]
    :label     "When?"
    :optional? true}
   {:type      "date"
    :path      [:till?]
    :label     "Till?"
    :optional? true}
   {:type    :select
    :path    [:color]
    :label   "Color"
    :options [{:label "Red" :value :red}
              {:label "Blue" :value :blue}]}
   {:type      :textarea
    :path      [:notes]
    :label     "Tell us more"
    :optional? true}
   {:type  :checkbox
    :path  [:yes?]
    :label "Yes?"}
   {:label   "Do you have any child dependents living with you?"
    :type    "mc-single"
    :options [{:label "Yes" :value true}
              {:label "No" :value false}]
    :path    [:client :has-children?]}
   {:label   "What kind of tobacco products?"
    :type    "mc-multi"
    :options [{:label "Normal cigarettes"
               :value true
               :key   :cigarettes?}
              {:label "E-cigarettes"
               :value true
               :key   :e-cigarettes?}
              {:label "Hubby bubbly"
               :value true
               :key   :hubbly?}
              {:label "Cigars"
               :value true
               :key   :cigars?}
              {:label "Pipe"
               :value true
               :key   :pipe?}]
    :path    [:client :lifestyle :tobacco-products]}
   {:label "How much did your most expensive pet cost to purchase?"
    :type  "zar"
    :path  [:client :lifestyle :max-pet-price]}
   {:label "How many pets do you own?"
    :type  "int"
    :path  [:client :lifestyle :num-pets-owned]}
   {:label "How tall is your tallest pet? (metres)"
    :type  "decimal"
    :path  [:client :lifestyle :max-pet-height]}
   {:label "How many stars?"
    :type  "rating"
    :path  [:star]
    :max   5}
   {:label "Debit Order!"
    :type  "bank-account"
    :path  [:bank]}])

(defn app
  []
  (let [*loaded (r/atom (loader/loaded? :big))
        *state  (r/atom {})]
    (fn []
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
          "placeholder"])
       [:div
        (for [field example-fields]
          ^{:key (:label field)}
          [forms/form {:model              *state
                       :on-save            #(reset! *state %)
                       :horizontal?        true
                       :strict-validation? false
                       :fields             [field]}])]])))

(rdom/render [app] (gdom/getElement "app"))

(loader/set-loaded! :main)
