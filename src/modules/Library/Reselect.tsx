import React from 'react'
import { createSelector } from 'reselect'

type exampleStateType = {
  shop: {
    taxPercent: number,
    items: {
      name: string,
      value: number
    }[]
  }
}

const shopItemsSelector = (state: exampleStateType) => state.shop.items
const taxPercentSelector = (state: exampleStateType) => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)

let exampleState: exampleStateType = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}

const codeblock = `
const shopItemsSelector = (state: exampleStateType) => state.shop.items
const taxPercentSelector = (state: exampleStateType) => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)`;


const Reselect = () => {
  return (
    <div>
      <h3>reselect states:</h3>
      <pre>
        {JSON.stringify(exampleState, null, 2)}
        {codeblock}
      </pre>
      <h4>Please see the console.log</h4>
    </div>
  )
}
console.log(subtotalSelector(exampleState)) // 2.15
console.log(taxSelector(exampleState))      // 0.172
console.log(totalSelector(exampleState))    // { total: 2.322 }
export default Reselect
