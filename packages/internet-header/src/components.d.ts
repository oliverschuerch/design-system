/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DropdownEvent, NavMainEntity } from "./models/header.model";
import { Event } from "@stencil/core";
import { IBreadcrumbItem, IBreadcrumbOverlay } from "./models/breadcrumbs.model";
import { StickynessOptions } from "./models/implementor.model";
import { Environment, ICustomConfig } from "./models/general.model";
import { IAvailableLanguage } from "./models/language.model";
export { DropdownEvent, NavMainEntity } from "./models/header.model";
export { Event } from "@stencil/core";
export { IBreadcrumbItem, IBreadcrumbOverlay } from "./models/breadcrumbs.model";
export { StickynessOptions } from "./models/implementor.model";
export { Environment, ICustomConfig } from "./models/general.model";
export { IAvailableLanguage } from "./models/language.model";
export namespace Components {
    interface PostKlpLoginWidget {
        /**
          * Override the logout-url provided by the portal config.
         */
        "logoutUrl"?: string;
        /**
          * Sets the focus on the login button
         */
        "setFocus": () => Promise<void>;
    }
    interface PostLanguageSwitch {
        /**
          * Visualization of the language switch. Possible values: 'dropdown' | 'list'
         */
        "mode": 'dropdown' | 'list';
        /**
          * Open or close the language switch programatically
          * @param force Boolean to force a state
          * @returns Boolean indicating new state
         */
        "toggleDropdown": (force?: boolean) => Promise<boolean>;
    }
    interface PostLogo {
    }
    interface PostMainNavigation {
        /**
          * Open a specific flyout
          * @param id Flyout ID
         */
        "setActiveFlyout": (id: string | null) => Promise<void>;
        /**
          * Focus the main navigation toggle button
         */
        "setFocus": () => Promise<void>;
        /**
          * Toggle the main navigation (only visible on mobile)
          * @param force Force a state
          * @returns Boolean indicating new state
         */
        "toggleDropdown": (force?: boolean) => Promise<boolean>;
    }
    interface PostMetaNavigation {
        /**
          * Displays the meta-navigation in full-width.
         */
        "fullWidth"?: boolean;
        /**
          * Displays the meta-navigation horihontally or vertically. Allowed values: 'horizontal' | 'vertical'
         */
        "orientation": 'horizontal' | 'vertical';
    }
    interface PostSearch {
        /**
          * Sets the focus on the search button
         */
        "setFocus": () => Promise<void>;
        /**
          * Toggle the dropdown and optionally force an open/closed state
          * @param force Boolean to force open/closed state
          * @returns Boolean indicating open state of the component
         */
        "toggleDropdown": (force?: boolean | Event) => Promise<boolean>;
    }
    interface PostSkiplinks {
    }
    interface SwisspostInternetBreadcrumbs {
        /**
          * Add custom breadcrumb items to the end of the pre-configured list. Handy if your online service has it's own navigation structure.
         */
        "customItems"?: string | IBreadcrumbItem[];
        /**
          * Hide all buttons.
         */
        "hideButtons": boolean;
        /**
          * Toggle an overlay associated with a button.
          * @param overlayId
         */
        "toggleOverlayById": (overlayId: IBreadcrumbOverlay['id']) => Promise<void>;
    }
    interface SwisspostInternetFooter {
    }
    interface SwisspostInternetHeader {
        /**
          * Set the currently activated route. If there is a link matching this URL in the header, it will be highlighted. Will also highlight partly matching URLs. When set to auto, will use current location.href for comparison.
         */
        "activeRoute"?: 'auto' | false | string;
        /**
          * DEPRECATED!: Define a proxy URL for the config fetch request. Will be removed in the next major version
         */
        "configProxy"?: string;
        /**
          * Customize the header config loaded from the post portal.
         */
        "customConfig"?: string | ICustomConfig;
        /**
          * Target environment. Choose 'int01' for local testing.
         */
        "environment": Environment;
        /**
          * Displays the header at full width for full-screen applications
         */
        "fullWidth"?: boolean;
        /**
          * Get the currently set language as a two letter string ("de", "fr" "it" or "en")
          * @returns string
         */
        "getCurrentLanguage": () => Promise<'de' | 'fr' | 'it' | 'en' | string>;
        /**
          * Initial language to be used. Overrides automatic language detection.
         */
        "language"?: 'de' | 'fr' | 'it' | 'en';
        /**
          * The header uses this cookie to set the language. Disables automatic language detection.
         */
        "languageCookieKey"?: string;
        /**
          * The header uses this local storage key to set the language. Disables automatic language selection.
         */
        "languageLocalStorageKey"?: string;
        /**
          * Override the language switch links with custom URLs. Helpful when your application contains sub-pages, and you would like to stay on subpages when the user changes language.
         */
        "languageSwitchOverrides"?: string | IAvailableLanguage[];
        /**
          * Toggle the login link (when logged out) or the user widget (when logged in).
         */
        "login": boolean;
        /**
          * Override the logout-url provided by the portal config.
         */
        "logoutUrl"?: string;
        /**
          * Toggle the meta navigation.
         */
        "meta": boolean;
        /**
          * Online Services only: Add custom links to the special online service navigation entry
         */
        "osFlyoutOverrides"?: string | NavMainEntity;
        /**
          * Your project id, previously passed as query string parameter serviceId.
         */
        "project": string;
        /**
          * Toggle the search button.
         */
        "search": boolean;
        /**
          * Toggle skiplinks. They help keyboard users to quickly jump to important sections of the page.
         */
        "skiplinks": boolean;
        /**
          * Sticky behaviour of the header.
         */
        "stickyness": StickynessOptions;
    }
}
export interface PostLanguageSwitchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostLanguageSwitchElement;
}
export interface PostMainNavigationCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostMainNavigationElement;
}
export interface PostSearchCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostSearchElement;
}
export interface SwisspostInternetHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLSwisspostInternetHeaderElement;
}
declare global {
    interface HTMLPostKlpLoginWidgetElement extends Components.PostKlpLoginWidget, HTMLStencilElement {
    }
    var HTMLPostKlpLoginWidgetElement: {
        prototype: HTMLPostKlpLoginWidgetElement;
        new (): HTMLPostKlpLoginWidgetElement;
    };
    interface HTMLPostLanguageSwitchElementEventMap {
        "dropdownToggled": DropdownEvent;
        "languageChanged": string;
    }
    interface HTMLPostLanguageSwitchElement extends Components.PostLanguageSwitch, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostLanguageSwitchElementEventMap>(type: K, listener: (this: HTMLPostLanguageSwitchElement, ev: PostLanguageSwitchCustomEvent<HTMLPostLanguageSwitchElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostLanguageSwitchElementEventMap>(type: K, listener: (this: HTMLPostLanguageSwitchElement, ev: PostLanguageSwitchCustomEvent<HTMLPostLanguageSwitchElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostLanguageSwitchElement: {
        prototype: HTMLPostLanguageSwitchElement;
        new (): HTMLPostLanguageSwitchElement;
    };
    interface HTMLPostLogoElement extends Components.PostLogo, HTMLStencilElement {
    }
    var HTMLPostLogoElement: {
        prototype: HTMLPostLogoElement;
        new (): HTMLPostLogoElement;
    };
    interface HTMLPostMainNavigationElementEventMap {
        "dropdownToggled": DropdownEvent;
        "flyoutToggled": string | null;
    }
    interface HTMLPostMainNavigationElement extends Components.PostMainNavigation, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostMainNavigationElementEventMap>(type: K, listener: (this: HTMLPostMainNavigationElement, ev: PostMainNavigationCustomEvent<HTMLPostMainNavigationElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostMainNavigationElementEventMap>(type: K, listener: (this: HTMLPostMainNavigationElement, ev: PostMainNavigationCustomEvent<HTMLPostMainNavigationElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostMainNavigationElement: {
        prototype: HTMLPostMainNavigationElement;
        new (): HTMLPostMainNavigationElement;
    };
    interface HTMLPostMetaNavigationElement extends Components.PostMetaNavigation, HTMLStencilElement {
    }
    var HTMLPostMetaNavigationElement: {
        prototype: HTMLPostMetaNavigationElement;
        new (): HTMLPostMetaNavigationElement;
    };
    interface HTMLPostSearchElementEventMap {
        "dropdownToggled": DropdownEvent;
    }
    interface HTMLPostSearchElement extends Components.PostSearch, HTMLStencilElement {
        addEventListener<K extends keyof HTMLPostSearchElementEventMap>(type: K, listener: (this: HTMLPostSearchElement, ev: PostSearchCustomEvent<HTMLPostSearchElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLPostSearchElementEventMap>(type: K, listener: (this: HTMLPostSearchElement, ev: PostSearchCustomEvent<HTMLPostSearchElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLPostSearchElement: {
        prototype: HTMLPostSearchElement;
        new (): HTMLPostSearchElement;
    };
    interface HTMLPostSkiplinksElement extends Components.PostSkiplinks, HTMLStencilElement {
    }
    var HTMLPostSkiplinksElement: {
        prototype: HTMLPostSkiplinksElement;
        new (): HTMLPostSkiplinksElement;
    };
    interface HTMLSwisspostInternetBreadcrumbsElement extends Components.SwisspostInternetBreadcrumbs, HTMLStencilElement {
    }
    var HTMLSwisspostInternetBreadcrumbsElement: {
        prototype: HTMLSwisspostInternetBreadcrumbsElement;
        new (): HTMLSwisspostInternetBreadcrumbsElement;
    };
    interface HTMLSwisspostInternetFooterElement extends Components.SwisspostInternetFooter, HTMLStencilElement {
    }
    var HTMLSwisspostInternetFooterElement: {
        prototype: HTMLSwisspostInternetFooterElement;
        new (): HTMLSwisspostInternetFooterElement;
    };
    interface HTMLSwisspostInternetHeaderElementEventMap {
        "headerLoaded": void;
    }
    interface HTMLSwisspostInternetHeaderElement extends Components.SwisspostInternetHeader, HTMLStencilElement {
        addEventListener<K extends keyof HTMLSwisspostInternetHeaderElementEventMap>(type: K, listener: (this: HTMLSwisspostInternetHeaderElement, ev: SwisspostInternetHeaderCustomEvent<HTMLSwisspostInternetHeaderElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLSwisspostInternetHeaderElementEventMap>(type: K, listener: (this: HTMLSwisspostInternetHeaderElement, ev: SwisspostInternetHeaderCustomEvent<HTMLSwisspostInternetHeaderElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLSwisspostInternetHeaderElement: {
        prototype: HTMLSwisspostInternetHeaderElement;
        new (): HTMLSwisspostInternetHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "post-klp-login-widget": HTMLPostKlpLoginWidgetElement;
        "post-language-switch": HTMLPostLanguageSwitchElement;
        "post-logo": HTMLPostLogoElement;
        "post-main-navigation": HTMLPostMainNavigationElement;
        "post-meta-navigation": HTMLPostMetaNavigationElement;
        "post-search": HTMLPostSearchElement;
        "post-skiplinks": HTMLPostSkiplinksElement;
        "swisspost-internet-breadcrumbs": HTMLSwisspostInternetBreadcrumbsElement;
        "swisspost-internet-footer": HTMLSwisspostInternetFooterElement;
        "swisspost-internet-header": HTMLSwisspostInternetHeaderElement;
    }
}
declare namespace LocalJSX {
    interface PostKlpLoginWidget {
        /**
          * Override the logout-url provided by the portal config.
         */
        "logoutUrl"?: string;
    }
    interface PostLanguageSwitch {
        /**
          * Visualization of the language switch. Possible values: 'dropdown' | 'list'
         */
        "mode"?: 'dropdown' | 'list';
        /**
          * Fires when the dropdown has been toggled.
         */
        "onDropdownToggled"?: (event: PostLanguageSwitchCustomEvent<DropdownEvent>) => void;
        /**
          * Fires when the language has been changed.
         */
        "onLanguageChanged"?: (event: PostLanguageSwitchCustomEvent<string>) => void;
    }
    interface PostLogo {
    }
    interface PostMainNavigation {
        /**
          * Fires when the dropdown has been toggled.
         */
        "onDropdownToggled"?: (event: PostMainNavigationCustomEvent<DropdownEvent>) => void;
        /**
          * Fires when the flyout has been toggled.
         */
        "onFlyoutToggled"?: (event: PostMainNavigationCustomEvent<string | null>) => void;
    }
    interface PostMetaNavigation {
        /**
          * Displays the meta-navigation in full-width.
         */
        "fullWidth"?: boolean;
        /**
          * Displays the meta-navigation horihontally or vertically. Allowed values: 'horizontal' | 'vertical'
         */
        "orientation"?: 'horizontal' | 'vertical';
    }
    interface PostSearch {
        /**
          * Fires when the dropdown has been toggled.
         */
        "onDropdownToggled"?: (event: PostSearchCustomEvent<DropdownEvent>) => void;
    }
    interface PostSkiplinks {
    }
    interface SwisspostInternetBreadcrumbs {
        /**
          * Add custom breadcrumb items to the end of the pre-configured list. Handy if your online service has it's own navigation structure.
         */
        "customItems"?: string | IBreadcrumbItem[];
        /**
          * Hide all buttons.
         */
        "hideButtons"?: boolean;
    }
    interface SwisspostInternetFooter {
    }
    interface SwisspostInternetHeader {
        /**
          * Set the currently activated route. If there is a link matching this URL in the header, it will be highlighted. Will also highlight partly matching URLs. When set to auto, will use current location.href for comparison.
         */
        "activeRoute"?: 'auto' | false | string;
        /**
          * DEPRECATED!: Define a proxy URL for the config fetch request. Will be removed in the next major version
         */
        "configProxy"?: string;
        /**
          * Customize the header config loaded from the post portal.
         */
        "customConfig"?: string | ICustomConfig;
        /**
          * Target environment. Choose 'int01' for local testing.
         */
        "environment"?: Environment;
        /**
          * Displays the header at full width for full-screen applications
         */
        "fullWidth"?: boolean;
        /**
          * Initial language to be used. Overrides automatic language detection.
         */
        "language"?: 'de' | 'fr' | 'it' | 'en';
        /**
          * The header uses this cookie to set the language. Disables automatic language detection.
         */
        "languageCookieKey"?: string;
        /**
          * The header uses this local storage key to set the language. Disables automatic language selection.
         */
        "languageLocalStorageKey"?: string;
        /**
          * Override the language switch links with custom URLs. Helpful when your application contains sub-pages, and you would like to stay on subpages when the user changes language.
         */
        "languageSwitchOverrides"?: string | IAvailableLanguage[];
        /**
          * Toggle the login link (when logged out) or the user widget (when logged in).
         */
        "login"?: boolean;
        /**
          * Override the logout-url provided by the portal config.
         */
        "logoutUrl"?: string;
        /**
          * Toggle the meta navigation.
         */
        "meta"?: boolean;
        /**
          * Fires when the header has been rendered to the page.
         */
        "onHeaderLoaded"?: (event: SwisspostInternetHeaderCustomEvent<void>) => void;
        /**
          * Online Services only: Add custom links to the special online service navigation entry
         */
        "osFlyoutOverrides"?: string | NavMainEntity;
        /**
          * Your project id, previously passed as query string parameter serviceId.
         */
        "project"?: string;
        /**
          * Toggle the search button.
         */
        "search"?: boolean;
        /**
          * Toggle skiplinks. They help keyboard users to quickly jump to important sections of the page.
         */
        "skiplinks"?: boolean;
        /**
          * Sticky behaviour of the header.
         */
        "stickyness"?: StickynessOptions;
    }
    interface IntrinsicElements {
        "post-klp-login-widget": PostKlpLoginWidget;
        "post-language-switch": PostLanguageSwitch;
        "post-logo": PostLogo;
        "post-main-navigation": PostMainNavigation;
        "post-meta-navigation": PostMetaNavigation;
        "post-search": PostSearch;
        "post-skiplinks": PostSkiplinks;
        "swisspost-internet-breadcrumbs": SwisspostInternetBreadcrumbs;
        "swisspost-internet-footer": SwisspostInternetFooter;
        "swisspost-internet-header": SwisspostInternetHeader;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-klp-login-widget": LocalJSX.PostKlpLoginWidget & JSXBase.HTMLAttributes<HTMLPostKlpLoginWidgetElement>;
            "post-language-switch": LocalJSX.PostLanguageSwitch & JSXBase.HTMLAttributes<HTMLPostLanguageSwitchElement>;
            "post-logo": LocalJSX.PostLogo & JSXBase.HTMLAttributes<HTMLPostLogoElement>;
            "post-main-navigation": LocalJSX.PostMainNavigation & JSXBase.HTMLAttributes<HTMLPostMainNavigationElement>;
            "post-meta-navigation": LocalJSX.PostMetaNavigation & JSXBase.HTMLAttributes<HTMLPostMetaNavigationElement>;
            "post-search": LocalJSX.PostSearch & JSXBase.HTMLAttributes<HTMLPostSearchElement>;
            "post-skiplinks": LocalJSX.PostSkiplinks & JSXBase.HTMLAttributes<HTMLPostSkiplinksElement>;
            "swisspost-internet-breadcrumbs": LocalJSX.SwisspostInternetBreadcrumbs & JSXBase.HTMLAttributes<HTMLSwisspostInternetBreadcrumbsElement>;
            "swisspost-internet-footer": LocalJSX.SwisspostInternetFooter & JSXBase.HTMLAttributes<HTMLSwisspostInternetFooterElement>;
            "swisspost-internet-header": LocalJSX.SwisspostInternetHeader & JSXBase.HTMLAttributes<HTMLSwisspostInternetHeaderElement>;
        }
    }
}
