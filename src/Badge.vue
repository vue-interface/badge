<template>
    <component
        :is="component || type"
        :href="href"
        :to="to"
        class="badge"
        :class="classes">
        <slot />
    </component>
</template>

<script>
import Variant from '@vue-interface/variant';

export default {

    name: 'Badge',

    mixins: [
        Variant
    ],

    props: {
        
        /**
         * The component type.
         *
         * @property {String}
         */
        component: String,
        
        /**
         * If an href attribute is passed, the badge becomes an anchor.
         *
         * @property {String}
         */
        href: String,

        /**
         * The badge appear as pill shaped.
         *
         * @property {Boolean}
         */
        pill: Boolean,

        /**
         * The badge appear as secondary in size to the parent element.
         *
         * @property {Boolean}
         */
        secondary: Boolean,
        
        /**
         * The to route. If used, badge will be a router-link component.
         *
         * @property {Object|String}
         */
        to: [Object, String],
    },

    computed: {

        type() {
            if(this.to) {
                return 'router-link';
            }

            if(this.href) {
                return 'a';
            }
            
            return 'span';
        },

        variantClass() {
            return `bg-${this.variant} text-${['muted', 'light', 'white'].indexOf(this.variant) > -1 ? 'dark' : 'white'}`;
        },

        classes() {
            return {
                'badge-pill': this.pill,
                'badge-secondary': this.secondary,
                [this.variantClass]: !!this.variant,
            };
        }
    }
};
</script>

<style>
a.badge:hover {
    color: white;
    text-decoration: none;
}
</style>
