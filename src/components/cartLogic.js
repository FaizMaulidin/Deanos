export const UpTotalPrice = () => {
   const cart = document.querySelectorAll('.cart-wrapper')
   const price = document.querySelectorAll('.priceexcl')
   const check = document.querySelectorAll('.check')
   const qty = document.querySelectorAll('.qty')
   let countPrice = 0

   for (let i = 0; i < cart.length; i++) {
      const pr = price[i]
      const ch = check[i]
      const qt = qty[i]

      let harga = parseFloat(pr.innerHTML)
      let cek = 0
      let jmlh = qt.getAttribute('value')
      if (ch.classList.contains('bg-rose-700')) {
         cek = 1
      }

      let total = parseInt(jmlh) * cek * harga
      countPrice += total
   }
   return (<>{countPrice.toFixed(2)}</>)
}