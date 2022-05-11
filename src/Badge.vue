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
import { Variant } from '@vue-interface/variant';

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
         * The to route. If used, badge will be a router-link component.
         *
         * @property {Object|String}
         */
        to: [Object, String],
        
        /**
         * The variant name.
         *
         * @param {String}
         */
        variant: {
            type: String,
            default: 'primary'
        }
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
            return `bg-${this.variant}`;
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