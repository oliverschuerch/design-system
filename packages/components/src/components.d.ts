/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { AlertType } from "./components/post-alert/alert-types";
import { BackgroundColor } from "./components/post-tooltip/types";
import { Placement } from "@floating-ui/dom";
export { AlertType } from "./components/post-alert/alert-types";
export { BackgroundColor } from "./components/post-tooltip/types";
export { Placement } from "@floating-ui/dom";
export namespace Components {
    interface PostAlert {
        /**
          * Triggers alert dismissal programmatically (same as clicking on the close button (×)).
         */
        "dismiss": () => Promise<void>;
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel": string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible": boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed": boolean;
        /**
          * The icon to display in the alert. By default, the icon depends on the alert type.  If `none`, no icon is displayed.
         */
        "icon": string;
        /**
          * The type of the alert.
         */
        "type": AlertType;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
        /**
          * Triggers the collapse programmatically.
         */
        "toggle": (open?: boolean) => Promise<boolean>;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel": HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name": string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel": HTMLPostTabPanelElement['name'];
        /**
          * Shows the panel with the given name and selects its associated tab. Any other panel that was previously shown becomes hidden and its associated tab is unselected.
         */
        "show": (panelName: string) => Promise<void>;
    }
    interface PostTooltip {
        /**
          * Defines the background color of the tooltip. Choose the one that provides the best contrast in your scenario.
         */
        "backgroundColor"?: BackgroundColor;
        /**
          * Programmatically hide this tooltip
         */
        "hide": () => Promise<void>;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
        /**
          * Programmatically display the tooltip
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
         */
        "show": (target: HTMLElement) => Promise<void>;
        /**
          * Toggle tooltip display
          * @param target An element with [data-tooltip-target="id"] where the tooltip should be shown
          * @param force Pass true to always show or false to always hide
         */
        "toggle": (target: HTMLElement, force?: boolean) => Promise<void>;
    }
}
export interface PostAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostAlertElement;
}
export interface PostTabsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLPostTabsElement;
}
declare global {
    interface HTMLPostAlertElement extends Components.PostAlert, HTMLStencilElement {
    }
    var HTMLPostAlertElement: {
        prototype: HTMLPostAlertElement;
        new (): HTMLPostAlertElement;
    };
    interface HTMLPostCollapsibleElement extends Components.PostCollapsible, HTMLStencilElement {
    }
    var HTMLPostCollapsibleElement: {
        prototype: HTMLPostCollapsibleElement;
        new (): HTMLPostCollapsibleElement;
    };
    /**
     * @class PostIcon - representing a stencil component
     */
    interface HTMLPostIconElement extends Components.PostIcon, HTMLStencilElement {
    }
    var HTMLPostIconElement: {
        prototype: HTMLPostIconElement;
        new (): HTMLPostIconElement;
    };
    interface HTMLPostTabHeaderElement extends Components.PostTabHeader, HTMLStencilElement {
    }
    var HTMLPostTabHeaderElement: {
        prototype: HTMLPostTabHeaderElement;
        new (): HTMLPostTabHeaderElement;
    };
    interface HTMLPostTabPanelElement extends Components.PostTabPanel, HTMLStencilElement {
    }
    var HTMLPostTabPanelElement: {
        prototype: HTMLPostTabPanelElement;
        new (): HTMLPostTabPanelElement;
    };
    interface HTMLPostTabsElement extends Components.PostTabs, HTMLStencilElement {
    }
    var HTMLPostTabsElement: {
        prototype: HTMLPostTabsElement;
        new (): HTMLPostTabsElement;
    };
    interface HTMLPostTooltipElement extends Components.PostTooltip, HTMLStencilElement {
    }
    var HTMLPostTooltipElement: {
        prototype: HTMLPostTooltipElement;
        new (): HTMLPostTooltipElement;
    };
    interface HTMLElementTagNameMap {
        "post-alert": HTMLPostAlertElement;
        "post-collapsible": HTMLPostCollapsibleElement;
        "post-icon": HTMLPostIconElement;
        "post-tab-header": HTMLPostTabHeaderElement;
        "post-tab-panel": HTMLPostTabPanelElement;
        "post-tabs": HTMLPostTabsElement;
        "post-tooltip": HTMLPostTooltipElement;
    }
}
declare namespace LocalJSX {
    interface PostAlert {
        /**
          * The label to use for the close button of a dismissible alert.
         */
        "dismissLabel"?: string;
        /**
          * If `true`, a close button (×) is displayed and the alert can be dismissed by the user.
         */
        "dismissible"?: boolean;
        /**
          * If `true`, the alert is positioned at the bottom of the window, from edge to edge.
         */
        "fixed"?: boolean;
        /**
          * The icon to display in the alert. By default, the icon depends on the alert type.  If `none`, no icon is displayed.
         */
        "icon"?: string;
        /**
          * An event emitted when the alert element is dismissed, after the transition. It has no payload and only relevant for dismissible alerts.
         */
        "onDismissed"?: (event: PostAlertCustomEvent<void>) => void;
        /**
          * The type of the alert.
         */
        "type"?: AlertType;
    }
    interface PostCollapsible {
        /**
          * If `true`, the element is initially collapsed otherwise it is displayed.
         */
        "collapsed"?: boolean;
        /**
          * Defines the hierarchical level of the collapsible header within the headings structure.
         */
        "headingLevel"?: number;
    }
    /**
     * @class PostIcon - representing a stencil component
     */
    interface PostIcon {
        /**
          * The name of the animation.
         */
        "animation"?: Animation | null;
        /**
          * The base path, where the icons are located (must be a public url).<br/>Leave this field empty to use the default cdn url.
         */
        "base"?: string | null;
        /**
          * When set to `true`, the icon will be flipped horizontally.
         */
        "flipH"?: boolean;
        /**
          * When set to `true`, the icon will be flipped vertically.
         */
        "flipV"?: boolean;
        /**
          * The name/id of the icon (e.g. 1000, 1001, ...).
         */
        "name": string;
        /**
          * The number of degree for the css rotate transformation.
         */
        "rotate"?: number | null;
        /**
          * The number for the css scale transformation.
         */
        "scale"?: number | null;
    }
    interface PostTabHeader {
        /**
          * The name of the panel controlled by the tab header.
         */
        "panel"?: HTMLPostTabPanelElement['name'];
    }
    interface PostTabPanel {
        /**
          * The name of the panel, used to associate it with a tab header.
         */
        "name"?: string;
    }
    interface PostTabs {
        /**
          * The name of the panel that is initially shown. If not specified, it defaults to the panel associated with the first tab.  **Changing this value after initialization has no effect.**
         */
        "activePanel"?: HTMLPostTabPanelElement['name'];
        /**
          * An event emitted after the active tab changes, when the fade in transition of its associated panel is finished. The payload is the name of the newly shown panel.
         */
        "onTabChange"?: (event: PostTabsCustomEvent<HTMLPostTabPanelElement['name']>) => void;
    }
    interface PostTooltip {
        /**
          * Defines the background color of the tooltip. Choose the one that provides the best contrast in your scenario.
         */
        "backgroundColor"?: BackgroundColor;
        /**
          * Defines the placement of the tooltip according to the floating-ui options available at https://floating-ui.com/docs/computePosition#placement. Tooltips are automatically flipped to the opposite side if there is not enough available space and are shifted towards the viewport if they would overlap edge boundaries.
         */
        "placement"?: Placement;
    }
    interface IntrinsicElements {
        "post-alert": PostAlert;
        "post-collapsible": PostCollapsible;
        "post-icon": PostIcon;
        "post-tab-header": PostTabHeader;
        "post-tab-panel": PostTabPanel;
        "post-tabs": PostTabs;
        "post-tooltip": PostTooltip;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-alert": LocalJSX.PostAlert & JSXBase.HTMLAttributes<HTMLPostAlertElement>;
            "post-collapsible": LocalJSX.PostCollapsible & JSXBase.HTMLAttributes<HTMLPostCollapsibleElement>;
            /**
             * @class PostIcon - representing a stencil component
             */
            "post-icon": LocalJSX.PostIcon & JSXBase.HTMLAttributes<HTMLPostIconElement>;
            "post-tab-header": LocalJSX.PostTabHeader & JSXBase.HTMLAttributes<HTMLPostTabHeaderElement>;
            "post-tab-panel": LocalJSX.PostTabPanel & JSXBase.HTMLAttributes<HTMLPostTabPanelElement>;
            "post-tabs": LocalJSX.PostTabs & JSXBase.HTMLAttributes<HTMLPostTabsElement>;
            "post-tooltip": LocalJSX.PostTooltip & JSXBase.HTMLAttributes<HTMLPostTooltipElement>;
        }
    }
}
