// Jason's Food To Go — menu data.
// Edit prices/items here; the menu board renders straight from this file.
// Prices are placeholders based on typical Perth takeaway pricing — confirm with the shop.

export const shop = {
  name: "Jason's Food To Go",
  tagline: 'Fish & Chips',
  address: '381A Belgravia Street, Cloverdale WA 6105',
  phone: '(08) 9277 9922',
  phoneHref: 'tel:+61892779922',
  hours: [
    { days: 'Tuesday – Saturday', time: '11:00am – 8:00pm' },
    { days: 'Sunday', time: '4:00pm – 8:00pm' },
    { days: 'Monday', time: 'Closed' },
  ],
}

export const menu = [
  {
    id: 'fish',
    label: 'Fresh Fish',
    note: 'Battered, crumbed or grilled',
    items: [
      { name: 'Snapper', price: 12.5, star: true },
      { name: 'Red Spot Emperor', price: 11.5, star: true },
      { name: 'Barramundi', price: 10.5 },
      { name: 'Shark (Flake)', price: 9.5 },
      { name: 'Hake', price: 8.0 },
      { name: 'Butterfish', price: 9.0 },
    ],
  },
  {
    id: 'chips',
    label: 'Chips & Sides',
    note: 'Chicken salt on request',
    items: [
      { name: 'Chips — Small', price: 5.0 },
      { name: 'Chips — Medium', price: 7.0 },
      { name: 'Chips — Large', price: 9.0 },
      { name: 'Potato Scallops (each)', price: 1.8 },
      { name: 'Pineapple Fritter', price: 3.5 },
      { name: 'Battered Sav', price: 4.5 },
      { name: 'Coleslaw', price: 4.0 },
    ],
  },
  {
    id: 'seafood',
    label: 'Seafood',
    note: 'Cooked fresh to order',
    items: [
      { name: 'Calamari Rings (5)', price: 7.5, star: true },
      { name: 'Prawns (6)', price: 9.5 },
      { name: 'Crab Sticks (each)', price: 2.5 },
      { name: 'Scallops (4)', price: 9.0 },
      { name: 'Prawn Cutlets (5)', price: 8.5 },
    ],
  },
  {
    id: 'burgers',
    label: 'Burgers',
    note: 'On a toasted bun with fresh salad',
    items: [
      { name: 'Fish Burger', price: 10.5 },
      { name: 'Beef Burger', price: 10.0 },
      { name: 'Burger with the Lot', price: 13.5, star: true },
      { name: 'Chicken Burger', price: 10.0 },
      { name: 'Cheeseburger', price: 8.5 },
    ],
  },
  {
    id: 'packs',
    label: 'Packs & Baskets',
    note: 'Feeds the whole crew',
    items: [
      { name: 'Fish & Chips Pack', price: 13.5, star: true },
      { name: 'Seafood Basket', price: 16.5 },
      { name: 'Family Pack (4 fish + chips)', price: 42.0 },
      { name: 'Kids Pack (nuggets + chips)', price: 8.5 },
    ],
  },
]
