Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{categories:{cardinal:["one","two","few","other"],ordinal:["one","two","few","other"]},fn:function(e,t){var o=String(e).split("."),a=Number(o[0])==e;return t?1==e||11==e?"one":2==e||12==e?"two":3==e||13==e?"few":"other":1==e||11==e?"one":2==e||12==e?"two":a&&e>=3&&e<=10||a&&e>=13&&e<=19?"few":"other"}},locale:"gd"});