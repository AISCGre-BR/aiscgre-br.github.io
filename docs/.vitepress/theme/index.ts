import Layout from './Layout.vue'
import HomeHero from './components/HomeHero.vue'
import CongressBanner from './components/CongressBanner.vue'
import HomeSection from './components/HomeSection.vue'
import ThresholdQuote from './components/ThresholdQuote.vue'
import PairGrid from './components/PairGrid.vue'
import PairItem from './components/PairItem.vue'
import CitationBlock from './components/CitationBlock.vue'
import PhotoFigure from './components/PhotoFigure.vue'
import BoardRoster from './components/BoardRoster.vue'
import './styles/index.css'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('HomeHero', HomeHero)
    app.component('CongressBanner', CongressBanner)
    app.component('HomeSection', HomeSection)
    app.component('ThresholdQuote', ThresholdQuote)
    app.component('PairGrid', PairGrid)
    app.component('PairItem', PairItem)
    app.component('CitationBlock', CitationBlock)
    app.component('PhotoFigure', PhotoFigure)
    app.component('BoardRoster', BoardRoster)
  }
}
