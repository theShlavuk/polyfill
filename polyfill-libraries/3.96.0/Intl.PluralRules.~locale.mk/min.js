Intl.PluralRules&&"function"==typeof Intl.PluralRules.__addLocaleData&&Intl.PluralRules.__addLocaleData({data:{mk:{categories:{cardinal:["one","other"],ordinal:["one","two","many","other"]},fn:function(a,l){var e=String(a).split("."),t=e[0],n=e[1]||"",o=!e[1],r=t.slice(-1),i=t.slice(-2),c=n.slice(-1),s=n.slice(-2);return l?1==r&&11!=i?"one":2==r&&12!=i?"two":7!=r&&8!=r||17==i||18==i?"other":"many":o&&1==r&&11!=i||1==c&&11!=s?"one":"other"}}},availableLocales:["mk"]});