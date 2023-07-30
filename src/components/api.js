import axios from "axios";
import { useState, useEffect } from "react";

const getProds = async () => {
   const prod = await axios.get("https://fakestoreapi.com/products")
   return prod.data
}

export let ray = new Array()

export const addCart = (id, qty) => {
   let cond = false
   ray.map((prod) => {
      if (prod.productId === id) { cond = true }
   })
   if (cond === true) {
      ray.map((prod) => {
         if (prod.productId === id) {
            if (prod.quantity){prod.quantity += qty} else {
               prod.quantity = qty
            }
         }
      })
   } else {
      ray.push({
         'productId': id, 'quantity': qty
      })
   }
}

export const removeCart = (id, qty) => {
   ray.map((prod) => {
      if (prod.productId === id) {
         prod.quantity -= qty
      }
   })
}

export const addWish = (id) => {
   let cond = false
   ray.map((prod) => {
      if (prod.productId === id) { cond = true }
   })
   if (cond === true) {
      ray.map((prod) => {
         if (prod.productId === id) {
            prod.wishlist = true
         }
      })
   } else {
      ray.push({
         'productId': id, 'wishlist': true
      })
   }
}

export const removeWish = (id) => {
   ray.map((prod) => {
      if (prod.productId === id) {
         prod.wishlist = false
      }
   })
}

export const UsingDucts = () => {
   const [getDucts, setDucts] = useState([])

   useEffect(() => {
      getProds().then((res) => {
         setDucts(res)
      })
   }, [])

   return getDucts
}