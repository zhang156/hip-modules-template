export const appName = {{ nameZh }}
export const appNameEn = {{ name }}
{{#if_eq name "empi"}}
export const appId = 1
{{/if_eq}}
{{#if_eq name "mdm"}}
export const appId = 2
{{/if_eq}}
{{#if_eq name "cdr"}}
export const appId = 3
{{/if_eq}}
{{#if_eq name "ipms"}}
export const appId = 4
{{/if_eq}}
export const appVersion = {{ version }}
