# Discount Module

## ผู้พัฒนา
[นาย พิรุณพร เอี่ยมสูงเนิน]

---

## คำอธิบาย

โปรเจคนี้เป็น **Discount Module** ที่ใช้สำหรับคำนวณราคาสินค้าหลังจากใช้ส่วนลดต่างๆ ในระบบร้านค้าออนไลน์ โดยรองรับการใช้ส่วนลดหลายประเภท เช่น:

- **Fixed Amount Coupon**: ส่วนลดเป็นจำนวนเงินที่ลดจากราคาสินค้า
- **Percentage Coupon**: ส่วนลดเป็นเปอร์เซ็นต์จากราคาสินค้า
- **Category Discount**: ส่วนลดสำหรับสินค้าในหมวดหมู่ที่กำหนด
- **Points Discount**: ส่วนลดจากคะแนนที่ผู้ใช้สะสม
- **Seasonal Discount**: ส่วนลดที่ปรับตามจำนวนที่ใช้หรือช่วงเวลา (เช่น ทุกๆ 300 บาท ลด 40 บาท)

### ความสามารถหลัก:
1. คำนวณราคาสินค้าหลังจากใช้ส่วนลดต่างๆ
2. รองรับหลายประเภทส่วนลดที่สามารถใช้พร้อมกันได้
3. ตรวจสอบความถูกต้องของข้อมูลสินค้าและส่วนลดก่อนคำนวณ

---

## การติดตั้ง

### 1. ติดตั้งโปรเจค:
คัดลอกโปรเจคนี้ไปที่เครื่องของคุณ แล้วทำการติดตั้ง dependencies ด้วยคำสั่ง

```bash
npm install
# or
yarn
```


### ตัวอย่างการใช้งาน
คุณสามารถใช้ฟังก์ชัน `calculateFinalPrice` เพื่อคำนวณราคาสินค้าหลังจากใช้ส่วนลดต่างๆ โดยใช้ตัวอย่างนี้:

### 1. `CartItem`
ตัวแทนข้อมูลสินค้าที่อยู่ในตะกร้า
```typescript
interface CartItem {
   name: string;    // ชื่อสินค้า
   category: string; // หมวดหมู่ของสินค้า
   price: number;   // ราคาสินค้า
}
```
### 2. `Discount`
ประเภทส่วนลดที่รองรับในระบบ
```typescript
type Discount =
   | FixedAmountCoupon
   | PercentageDiscount
   | CategoryDiscount
   | PointsDiscount
   | SeasonalDiscount;
```

### 3. `Discount Types`

### 3.1 `FixedAmountCoupon`
- ส่วนลดที่ลดเป็นจำนวนเงินคงที่
```typescript
type FixedAmountCoupon = { type: "fixed_amount_coupon"; amount: number; };
```

### 3.2 `PercentageDiscount`
- ส่วนลดที่ลดเป็นเปอร์เซ็นต์จากราคาสินค้า
```typescript
type PercentageDiscount = { type: "percentage"; percentage: number; };
```

### 3.3 `CategoryDiscount`
- ส่วนลดเฉพาะสินค้าหมวดหมู่ที่กำหนด
```typescript
type CategoryDiscount = { type: "category_discount"; category: string; percentage: number; };
```
### 3.4 `PointsDiscount`
- ส่วนลดที่ลดโดยใช้คะแนนสะสมของผู้ใช้
```typescript
type PointsDiscount = { type: "points"; points: number; };
```
### 3.5 `SeasonalDiscount`
- ส่วนลดตามเงื่อนไข เช่น ลดทุก ๆ X บาท Y บาท
```typescript
type SeasonalDiscount = { type: "seasonal"; every_x: number; discount_y: number; };
```

---


```typescript
import { calculateFinalPrice } from './moduleDiscount';

// รายการสินค้าที่อยู่ในตะกร้า
const carts: CartItem[] = [
  { name: 'T-Shirt', price: 350, category: 'Clothing' },
  { name: 'Hat', price: 250, category: 'Accessories' }
];

// ส่วนลดที่ผู้ใช้สามารถใช้
const discounts: Discount[] = [
  { type: 'fixed_amount_coupon', amount: 50 },
  { type: 'percentage', percentage: 10 }
];

// คำนวณราคาสุดท้ายหลังจากใช้ส่วนลด
const finalPrice = calculateFinalPrice(carts, discounts);
console.log(`ราคาสินค้าหลังจากใช้ส่วนลด: ${finalPrice} บาท`);
```

### ฟังก์ชันหลัก

1. **`calculateFinalPrice(carts: CartItem[], discounts: Discount[]): number`**  
   คำนวณราคาสินค้าหลังจากใช้ส่วนลดต่างๆ

2. **`applyCategoryDiscount(carts: CartItem[], discount: CategoryDiscount): CartItem[]`**  
   ใช้ส่วนลดสำหรับหมวดหมู่สินค้า

3. **`applyCouponDiscount(totalPrice: number, discount: FixedAmountCoupon | PercentageDiscount): number`**  
   คำนวณราคาหลังจากใช้ส่วนลด Fixed Amount หรือ Percentage

4. **`applyPointDiscount(totalPrice: number, discount: PointsDiscount): number`**  
   คำนวณราคาหลังจากใช้ส่วนลดจากคะแนน

5. **`applySeasonalDiscount(totalPrice: number, discount: SeasonalDiscount): number`**  
   คำนวณ Seasonal Discount

6. **`sortDiscount(discounts: Discount[]): Discount[]`**  
   จัดลำดับส่วนลดตามลำดับการใช้งาน (Fixed Amount, Percentage, Category, Points, Seasonal)

7. **`validateCartItem(carts: CartItem[]): void`**  
   ตรวจสอบข้อมูลสินค้าในตะกร้าว่าถูกต้องหรือไม่

8. **`validateDiscount(discounts: Discount[]): void`**  
   ตรวจสอบความถูกต้องของข้อมูลส่วนลด

---

## การทดสอบ

```bash
npm run test
# or
yarn test
```

การทดสอบจะครอบคลุมกรณีต่างๆ เช่น การใช้หลายส่วนลดพร้อมกัน การตรวจสอบความถูกต้องของข้อมูล และฟังก์ชันคำนวณราคาต่างๆ

---
