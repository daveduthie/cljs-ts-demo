// eslint-disable-next-line import/prefer-default-export
export const data = {
  datumZar: {
    label: "Lump Sum Contribution",
    fieldName: "lumpSumContribution",
    id:
      "NjEwN2JmMWMtNTIyZC00NWFiLWFhMjItN2MzNzY3NGM1NGQ0fGx1bXBTdW1Db250cmlidXRpb24=",
    __typename: "DatumZar",
    optional: true,
    zarVal: 10500.0,
  },
  datumInt: {
    fieldName: "Number",
    __typename: "DatumInt",
    label: "Number Input",
    id:
      "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGJXVnRZbVZ5YzJocGNFNTFiV77psY2c9PQ==",
    optional: true,
    intVal: 0,
  },
  datumText: {
    fieldName: "text",
    __typename: "DatumText",
    label: "Text",
    id:
      "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGJXVnRZbVZ5YzJocGNFNTFiV0psY2c9PQ==",
    optional: true,
    textVal: "007",
  },
  datumSlider: {
    fieldName: "slider",
    label: "Slider label",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOFpHVmlhWFJQY21SbGNrUmhl1",
    __typename: "DatumSlider",
    max: 10,
    min: 0,
    optional: false,
    default: 0,
    sliderVal: 0,
    step: 1,
  },
  datumNumber: {
    fieldName: "number",
    label: "Number Rating",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25k000FpHVmlhWFJQY21SbGNrUmhl1",
    __typename: "DatumNumberRating",
    value: "4",
  },
  datumEmail: {
    fieldName: "Email",
    __typename: "DatumEmail",
    label: "Email Input",
    id:
      "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGJXVnRZbVZ5YzJocGNFNTFiV77psY2c9PQ==",
    optional: true,
    emailVal: "email@email.com",
  },
  datumStar: {
    fieldName: "star",
    label: "Star",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOFpHVmlhWFJQY21SbGNrUm9481",
    __typename: "DatumStar",

    optional: false,
  },
  datumDate: {
    fieldName: "date",
    __typename: "DatumDate",
    label: "Date",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOFkyOTJaWEpUZEdGeWRFUmhkR1U9",
    optional: false,
    dateVal: "2020-12-25",
  },
  datumSelectCombo: {
    fieldName: "sourceOfFunds",
    __typename: "DatumSelectCombo",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGMyOTFjbU5sVDJaR2RXNWtjdz09",
    optional: false,
    label: "AutoComplete",
    selection: {
      textOptions: [
        { label: "Allan Gray", value: "allan-gray" },
        { label: "BestMed", value: "bestmed" },
        { label: "Bonitas", value: "bonitas" },
        { label: "Bright Rock", value: "bright-rock" },
        { label: "Discovery", value: "discovery" },
        { label: "Discovery Insure", value: "discovery-insure" },
        { label: "FMI", value: "fmi" },
        { label: "Hollard", value: "hollard" },
        { label: "Liberty", value: "liberty" },
        { label: "Medihelp", value: "medihelp" },
        { label: "Momentum", value: "momentum" },
        { label: "Momentum Health", value: "momentum-health" },
        { label: "Nedgroup", value: "nedgroup" },
      ],
    },
  },
  datumSelect: {
    fieldName: "select",
    __typename: "DatumSelect",
    label: "Select",
    id: "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOFpHVmlhWFJQY21SbGNrUmhlUT09",
    optional: false,
    selection: {
      textVal: "1",
      textOptions: [
        {
          label: "1st",
          value: "1",
        },
        {
          label: "2nd",
          value: "2",
        },
      ],
      __typename: "DatumSelectionString",
    },
  },
  datumReference: {
    fieldName: "immediateNeedsBeneficiary",
    __typename: "DatumCompound",
    label: "immediate needs beneficiary",
    id:
      "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGFXMXRaV1JwWVhSbFRtVmxaSE5DWlc1bFptbGphV0Z5ZVE9PQ==",
    none: false,
    cardinality: "NONE_OR_ONE",
    actions: [
      {
        label: "Remove immediate needs beneficiary",
        op: "dontHave",
      },
      {
        label: "Set immediate needs beneficiary",
        op: "set",
      },
    ],
    fields: [
      {
        label: "primary beneficiary",
        fieldName: "primaryPerson",
        id:
          "TFUxUFJ6bFFiRlZMZVc1c2IyaEVNbmRPY25kOGFXMXRaV1JwWVhSbFRtVmxaSE5DWlc1bFptbGphV0Z5ZVh4d2NtbHRZWEo1VUdWeWMyOXU=",
        __typename: "DatumReference",
        optional: false,
        refVal: {
          label: " ",
          id: "5fd73b82-22aa-43ce-8d74-a5c5f7076fd3",
          exists: false,
        },
        refOptions: [
          {
            label: "Puss Boots",
            id: "609e5962-1919-4d1b-b5db-cff24cceaf47",
          },
          {
            label: "Kurt Farao",
            id: "60a379a2-1d50-4a0d-bab4-091891b834ca",
          },
        ],
      },
    ],
  },
  datumTable: {
    __typename: "DatumCompoundCollection",
    id:
      "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVno=",
    label: "Beneficiaries",
    fieldName: "beneficiaries",
    none: false,
    cardinality: "NONE_OR_MORE",
    actions: [
      {
        __typename: "HypermediaAction",
        label: "Remove Beneficiary",
        op: "delete",
      },
      {
        __typename: "HypermediaAction",
        label: "Remove all Beneficiaries",
        op: "dontHave",
      },
      { __typename: "HypermediaAction", label: "Add Beneficiary", op: "add" },
      { __typename: "HypermediaAction", label: "Edit Beneficiary", op: "set" },
    ],
    fields: [
      {
        __typename: "DatumReference",
        label: "Beneficiary",
        fieldName: "person",
        id:
          "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmSEJsY25OdmJnPT0=",
        optional: false,
        refVal: 0,
        refOptions: [
          {
            __typename: "ClientRelatedPersons",
            label: "Test Last Test",
            id: "60d334de-0af4-4a6d-b435-5f2243347852",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "Dog D Dog",
            id: "60d33759-5791-4bf0-af5f-e2150c0980b1",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "Test 1 Last",
            id: "60d4452f-0f5e-4284-aa56-fad2e5a2b4ce",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "kdfdkd sdfksdj",
            id: "60d44e9c-e212-4bf1-8281-f2dd7482422c",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "Test-ing sdkn skdj d",
            id: "60d9a436-1b71-48e3-9e64-2be2fe6683c6",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "Tels skdfnls",
            id: "60dae777-da64-4617-a26e-8571f4e055cb",
          },
          {
            __typename: "ClientRelatedPersons",
            label: "asdbkjs sdfsdfjnsd",
            id: "60dc18ba-a62d-43a6-b468-b9d9d57cbfd2",
          },
        ],
      },
      {
        __typename: "DatumDecimal",
        label: "Percentage of Life Cover",
        fieldName: "payoutLifeCover",
        id:
          "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmSEJoZVc5MWRFeHBabVZEYjNabGNnPT0=",
        optional: false,
        decimalVal: "",
      },
      {
        __typename: "DatumDecimal",
        label: "Percentage of Funeral Cover",
        fieldName: "payoutFuneralCover",
        id:
          "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmSEJoZVc5MWRFWjFibVZ5WVd4RGIzWmxjZz09",
        optional: false,
        decimalVal: null,
      },
    ],
    items: [
      {
        __typename: "DatumCompoundCollectionItem",
        id: "60dc6a82-8e76-4b18-8d5f-fe5686f16055",
        label: "asdbkjs - Cousin - {:life-cover 50.0, :funeral-cover 50.0}",
        fields: [
          {
            __typename: "DatumReference",
            label: "Beneficiary",
            fieldName: "person",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUZ3lMVGhsTnpZdE5HSXhPQzA0WkRWbUxXWmxOVFk0Tm1ZeE5qQTFOWHh3WlhKemIyND0=",
            optional: false,
            refVal: {
              __typename: "ClientRelatedPersons",
              label: "asdbkjs sdfsdfjnsd",
              id: "60dc18ba-a62d-43a6-b468-b9d9d57cbfd2",
              exists: true,
            },
            refOptions: [
              {
                __typename: "ClientRelatedPersons",
                label: "Test Last Test",
                id: "60d334de-0af4-4a6d-b435-5f2243347852",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Dog D Dog",
                id: "60d33759-5791-4bf0-af5f-e2150c0980b1",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test 1 Last",
                id: "60d4452f-0f5e-4284-aa56-fad2e5a2b4ce",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "kdfdkd sdfksdj",
                id: "60d44e9c-e212-4bf1-8281-f2dd7482422c",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test-ing sdkn skdj d",
                id: "60d9a436-1b71-48e3-9e64-2be2fe6683c6",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Tels skdfnls",
                id: "60dae777-da64-4617-a26e-8571f4e055cb",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "asdbkjs sdfsdfjnsd",
                id: "60dc18ba-a62d-43a6-b468-b9d9d57cbfd2",
              },
            ],
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Life Cover",
            fieldName: "payoutLifeCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUZ3lMVGhsTnpZdE5HSXhPQzA0WkRWbUxXWmxOVFk0Tm1ZeE5qQTFOWHh3WVhsdmRYUk1hV1psUTI5MlpYST0=",
            optional: false,
            decimalVal: 50,
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Funeral Cover",
            fieldName: "payoutFuneralCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUZ3lMVGhsTnpZdE5HSXhPQzA0WkRWbUxXWmxOVFk0Tm1ZeE5qQTFOWHh3WVhsdmRYUkdkVzVsY21Gc1EyOTJaWEk9",
            optional: false,
            decimalVal: 50,
          },
        ],
      },
      {
        __typename: "DatumCompoundCollectionItem",
        id: "60dc6a92-c220-4324-abf0-b3f0925c20f0",
        label: "Tels - Cousin - {:life-cover 50.0, :funeral-cover 50.0}",
        fields: [
          {
            __typename: "DatumReference",
            label: "Beneficiary",
            fieldName: "person",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUa3lMV015TWpBdE5ETXlOQzFoWW1Zd0xXSXpaakE1TWpWak1qQm1NSHh3WlhKemIyND0=",
            optional: false,
            refVal: {
              __typename: "ClientRelatedPersons",
              label: "Tels skdfnls",
              id: "60dae777-da64-4617-a26e-8571f4e055cb",
              exists: true,
            },
            refOptions: [
              {
                __typename: "ClientRelatedPersons",
                label: "Test Last Test",
                id: "60d334de-0af4-4a6d-b435-5f2243347852",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Dog D Dog",
                id: "60d33759-5791-4bf0-af5f-e2150c0980b1",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test 1 Last",
                id: "60d4452f-0f5e-4284-aa56-fad2e5a2b4ce",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "kdfdkd sdfksdj",
                id: "60d44e9c-e212-4bf1-8281-f2dd7482422c",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test-ing sdkn skdj d",
                id: "60d9a436-1b71-48e3-9e64-2be2fe6683c6",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Tels skdfnls",
                id: "60dae777-da64-4617-a26e-8571f4e055cb",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "asdbkjs sdfsdfjnsd",
                id: "60dc18ba-a62d-43a6-b468-b9d9d57cbfd2",
              },
            ],
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Life Cover",
            fieldName: "payoutLifeCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUa3lMV015TWpBdE5ETXlOQzFoWW1Zd0xXSXpaakE1TWpWak1qQm1NSHh3WVhsdmRYUk1hV1psUTI5MlpYST0=",
            optional: false,
            decimalVal: 50,
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Funeral Cover",
            fieldName: "payoutFuneralCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllUa3lMV015TWpBdE5ETXlOQzFoWW1Zd0xXSXpaakE1TWpWak1qQm1NSHh3WVhsdmRYUkdkVzVsY21Gc1EyOTJaWEk9",
            optional: false,
            decimalVal: 50,
          },
        ],
      },
      {
        __typename: "DatumCompoundCollectionItem",
        id: "60dc6b21-60ce-4a60-af1b-a03510eb340f",
        label: "Test 1 - Some - {:life-cover 0.0, :funeral-cover 0.0}",
        fields: [
          {
            __typename: "DatumReference",
            label: "Beneficiary",
            fieldName: "person",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllqSXhMVFl3WTJVdE5HRTJNQzFoWmpGaUxXRXdNelV4TUdWaU16UXdabnh3WlhKemIyND0=",
            optional: false,
            refVal: {
              __typename: "ClientRelatedPersons",
              label: "Test 1 Last",
              id: "60d4452f-0f5e-4284-aa56-fad2e5a2b4ce",
              exists: true,
            },
            refOptions: [
              {
                __typename: "ClientRelatedPersons",
                label: "Test Last Test",
                id: "60d334de-0af4-4a6d-b435-5f2243347852",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Dog D Dog",
                id: "60d33759-5791-4bf0-af5f-e2150c0980b1",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test 1 Last",
                id: "60d4452f-0f5e-4284-aa56-fad2e5a2b4ce",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "kdfdkd sdfksdj",
                id: "60d44e9c-e212-4bf1-8281-f2dd7482422c",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Test-ing sdkn skdj d",
                id: "60d9a436-1b71-48e3-9e64-2be2fe6683c6",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "Tels skdfnls",
                id: "60dae777-da64-4617-a26e-8571f4e055cb",
              },
              {
                __typename: "ClientRelatedPersons",
                label: "asdbkjs sdfsdfjnsd",
                id: "60dc18ba-a62d-43a6-b468-b9d9d57cbfd2",
              },
            ],
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Life Cover",
            fieldName: "payoutLifeCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllqSXhMVFl3WTJVdE5HRTJNQzFoWmpGaUxXRXdNelV4TUdWaU16UXdabnh3WVhsdmRYUk1hV1psUTI5MlpYST0=",
            optional: false,
            decimalVal: 0,
          },
          {
            __typename: "DatumDecimal",
            label: "Percentage of Funeral Cover",
            fieldName: "payoutFuneralCover",
            id:
              "Ym1WM0xXeHBabVV0YVc1emRYSmhibU5sTFhOaGJteGhiUzEyTVh4aVpXNWxabWxqYVdGeWFXVnpmRFl3WkdNMllqSXhMVFl3WTJVdE5HRTJNQzFoWmpGaUxXRXdNelV4TUdWaU16UXdabnh3WVhsdmRYUkdkVzVsY21Gc1EyOTJaWEk9",
            optional: false,
            decimalVal: 0,
          },
        ],
      },
    ],
  },
  datumFuzzyDate: {
    label: "Current occupation start date",
    fieldName: "currentOccupationStartDate",
    id: "cHc4c3h4fGNhcmVlcnxjdXJyZW50T2NjdXBhdGlvblN0YXJ0RGF0ZQ==",
    __typename: "DatumFuzzyDate",
    optional: false,
    fuzzyDateVal: "2021-05-12",
  },
  datumMCMulti: {
    label: "Professional bodies",
    fieldName: "profBodies",
    id: "cHc4c3h4fGNhcmVlcnxwcm9mQm9kaWVz",
    __typename: "DatumMCMulti",
    optional: true,
    mcMultiVal: ["ecsa", "asaqs", "fpi"],
    options: [
      {
        label: "The Association of South African Quantity Surveyors",
        value: "asaqs",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Engineering Council of South Africa ",
        value: "ecsa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Financial Planning Institute",
        value: "fpi",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Psychological Association",
        value: "psyssa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Geomatics Council",
        value: "sagc",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Institute of South African Architects",
        value: "saia",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Institute of Chartered Accountants",
        value: "saica",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Institute of Intellectual Property Law",
        value: "saiipl",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Veterinary Association",
        value: "sava",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Actuarial Society of South Africa",
        value: "assa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Actuarial Society of Zimbabwe",
        value: "asz",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Institute and Faculty of Actuaries",
        value: "uk-ifa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "Another IAA recognised actuarial body",
        value: "other-actuarial",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Bisho Society of Advocates",
        value: "bhisho-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Cape Bar",
        value: "cape-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Eastern Cape Society of Advocates",
        value: "ec-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Free State Society of Advocates",
        value: "fs-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Johannesburg Society of Advocates",
        value: "jhb-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Society of Advocates KwaZulu-Natal",
        value: "kzn-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Mpumalanga Society of Advocates",
        value: "mp-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Northern Cape Society of Advocates",
        value: "nc-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The North West Bar Association",
        value: "nw-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Polokwane Society of Advocates",
        value: "plk-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The KwaZulu-Natal Pietermaritzburg Bar Council",
        value: "pm-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Pretoria Society of Advocates",
        value: "pta-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Society of Advocates Transkei",
        value: "transkei-bar",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Black Lawyers Association",
        value: "black-law-assoc",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Cape Law Society",
        value: "cape-law-soc",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Law Society of the Free State",
        value: "fs-law-soc",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The KwaZulu-Natal Law Society",
        value: "kzn-law-soc",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The National Association of Democratic Lawyers",
        value: "na-law",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Law Society of the Northern Provinces",
        value: "np-law",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Health Professions Council of South Africa",
        value: "hpcsa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The Pharmaceutical Society of South Africa",
        value: "pssa",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Dental Association",
        value: "sada",
        __typename: "DatumSelectionStringOption",
      },
      {
        label: "The South African Medical Association",
        value: "sama",
        __typename: "DatumSelectionStringOption",
      },
    ],
  },
  datumPhone: {
    label: "Home Phone Number",
    fieldName: "homePhone",
    id: "cHc4c3h4fGhvbWVQaG9uZQ==",
    __typename: "DatumPhone",
    optional: true,
    phoneVal: "+27123456789",
  },
  datumSaId: {
    label: "SA ID - number",
    fieldName: "identityIdDocsSaIdNumber",
    id: "cHc4c3h4fHJlbGF0ZWRQZXJzb25zfGlkZW50aXR5SWREb2NzU2FJZE51bWJlcg==",
    __typename: "DatumSaId",
    optional: false,
    saIdVal: "",
  },
  datumMCSingle: {
    id: "Y2FuY2VsLWxpZmUtaW5zdXJhbmNlLXBwcy0yMDIxLXYxfHJlcGxhY2VtZW50",
    label: "Will this policy be replaced?",
    fieldName: "replacement",
    __typename: "DatumMCSingle",
    optional: false,
    selection: {
      textVal: "true",
      textOptions: [
        {
          label: "Yes",
          value: "true",
          __typename: "DatumSelectionStringOption",
        },
        {
          label: "No",
          value: "false",
          __typename: "DatumSelectionStringOption",
        },
      ],
      __typename: "DatumSelectionString",
    },
  },
  datumCheckbox: {
    label: "Work Benefit?",
    fieldName: "workBenefit",
    id:
      "YWRqdXN0LWxpZmUtYmVuZWZpdC1wcHMtMjAyMS12MXxvdGhlckluc3VyYW5jZXx3b3JrQmVuZWZpdA==",
    __typename: "DatumCheckbox",
    optional: true,
    checkboxVal: true,
  },
};
