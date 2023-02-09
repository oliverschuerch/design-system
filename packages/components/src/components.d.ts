/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
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
          * The name of the animation (`cylon`, `cylon-vertical`, `spin`, `spin-reverse`, `fade`, `throb`).
         */
        "animation"?: string;
        /**
          * The base path, where the icons are located (must be a public url).
         */
        "base"?: string;
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
          * The `number` of degree for the css `rotate` transformation.
         */
        "rotate"?: number;
        /**
          * The `number` for the css `scale` transformation.
         */
        "scale"?: number;
    }
}
declare global {
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
    interface HTMLElementTagNameMap {
        "post-collapsible": HTMLPostCollapsibleElement;
        "post-icon": HTMLPostIconElement;
    }
}
declare namespace LocalJSX {
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
          * The name of the animation (`cylon`, `cylon-vertical`, `spin`, `spin-reverse`, `fade`, `throb`).
         */
        "animation"?: string;
        /**
          * The base path, where the icons are located (must be a public url).
         */
        "base"?: string;
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
        "name"?: string;
        /**
          * The `number` of degree for the css `rotate` transformation.
         */
        "rotate"?: number;
        /**
          * The `number` for the css `scale` transformation.
         */
        "scale"?: number;
    }
    interface IntrinsicElements {
        "post-collapsible": PostCollapsible;
        "post-icon": PostIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "post-collapsible": LocalJSX.PostCollapsible & JSXBase.HTMLAttributes<HTMLPostCollapsibleElement>;
            /**
             * @class PostIcon - representing a stencil component
             */
            "post-icon": LocalJSX.PostIcon & JSXBase.HTMLAttributes<HTMLPostIconElement>;
        }
    }
}
