Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({locale:"ne",categories:{cardinal:["one","other"],ordinal:["one","other"]},fn:function(e,l){var a=String(e).split("."),n=Number(a[0])==e;return l?n&&e>=1&&e<=4?"one":"other":1==e?"one":"other"}});