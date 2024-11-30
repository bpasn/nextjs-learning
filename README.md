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

## วิธีการรัน API

ในการรัน API บนเครื่องของคุณ ให้ทำตามขั้นตอนดังนี้:


**เริ่มต้น API:** 

```bash
npm run start:api
# or
yarn run start:api
```

---

## API Endpoint: `/upload-json`

จุดเชื่อมต่อนี้ให้ผู้ใช้สามารถอัพโหลดไฟล์ JSON ที่มีข้อมูลสินค้าหรือส่วนลด ระบบจะประมวลผลไฟล์และคืนราคาสุดท้ายหลังจากที่ใช้ส่วนลดทั้งหมดแล้ว

### Method: `POST`

### URL: http://localhost:3000/upload-json
### Request Body (form-data):

คุณต้องส่งไฟล์ในรูปแบบ `multipart/form-data` โดยใช้ key เป็น `file`.

**โครงสร้างไฟล์:**

ไฟล์ JSON ควรมีโครงสร้างดังนี้:

```json
{
    "carts": [
        {
            "name": "Product Name",
            "price": "Product Price",
            "category": "Product Category"
        },
        ...
    ],
    "discounts": [
        {
            "type": "fixed_amount_coupon",
            "amount": 50
        },
        {
            "type": "category_discount",
            "category": "Clothing",
            "percentage": 15
        },
        ...
    ]
}
```

ตัวอย่างการส่งคำขอ:
ใน Postman ให้ทำตามขั้นตอนนี้เพื่ออัพโหลดไฟล์:

ตั้งค่า method เป็น POST
ตั้ง URL เป็น http://localhost:3000/upload-json
ในแท็บ "Body" ให้เลือก form-data
เลือกไฟล์ที่ต้องการอัพโหลด โดยใช้ key เป็น file
กด Send
ตัวอย่างการตอบกลับ:
API จะตอบกลับด้วยราคาสุดท้ายหลังจากใช้ส่วนลดทั้งหมด:

```json
{
    "finalPrice": 892.5
}
```

## การจัดการข้อผิดพลาด
หากเกิดปัญหากับไฟล์ที่อัพโหลดหรือข้อมูลภายในไฟล์ไม่ถูกต้อง ระบบจะส่งข้อผิดพลาดพร้อมรหัสสถานะ HTTP ที่เกี่ยวข้อง

## ตัวอย่างข้อผิดพลาด
1. **ไฟล์ไม่ถูกต้อง (ไม่ใช่ไฟล์ JSON)**
```json
{
    "error": "Invalid file type. Only JSON files are allowed."
}
```
2. **เนื้อหาของไฟล์ว่างเปล่า**
```json
{
    "error": "File content is empty."
}
```
3. **โครงสร้าง JSON ไม่ถูกต้อง (ต้องเป็น array สำหรับ carts และ discounts)**
```json
{
    "error": "Invalid JSON structure. Expected arrays for carts and discounts."
}
```

การทดสอบ API
หากต้องการทดสอบ API คุณสามารถใช้ Jest ในการทดสอบด้วยคำสั่ง:

รันการทดสอบ:

ใช้คำสั่งที่จำเป็นในการรันการทดสอบ

กรณีทดสอบ:

อัพโหลดไฟล์ที่ถูกต้อง: ทดสอบว่าระบบคำนวณราคาสุดท้ายได้ถูกต้องเมื่อข้อมูลในไฟล์ JSON ถูกต้อง
อัพโหลดไฟล์ที่ไม่ถูกต้อง: ทดสอบการตอบกลับข้อผิดพลาดเมื่อไฟล์หรือโครงสร้างข้อมูลไม่ถูกต้อง


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


## การทดสอบ (Testing)

```bash
npm run test
# or
yarn test
```

โค้ดในโปรเจคนี้ได้รับการทดสอบด้วย **Jest** เพื่อให้มั่นใจว่าฟังก์ชันการทำงานของโมดูลนี้ถูกต้องและครอบคลุมทุกกรณีที่สำคัญ

### กรณีที่ครอบคลุมในการทดสอบ:
1. **กรณีสำเร็จ (Success Cases)**
   - ใช้ Fixed Amount Coupon, Category Discount (On Top), และ Seasonal Discount พร้อมกัน
   - ใช้ Percentage Coupon และ Seasonal Discount พร้อมกัน
   - ใช้ Points Discount อย่างถูกต้อง
   - ไม่มีส่วนลดที่ใช้ และระบบคืนราคาสินค้ารวมทั้งหมด
   - ป้องกันราคาติดลบหลังใช้ส่วนลด

2. **กรณีข้อผิดพลาด (Error Cases)**
   - สินค้าในตะกร้ามีข้อมูลไม่ถูกต้อง เช่น ชื่อหรือราคาผิดพลาด
   - ข้อมูลส่วนลดไม่ถูกต้อง เช่น จำนวนเงินหรือเปอร์เซ็นต์น้อยกว่า 0
   - ใช้ส่วนลดประเภทเดียวกันหลายครั้งที่ระบบไม่รองรับ
   - ประเภทส่วนลดไม่ถูกต้อง

3. **การทำงานของฟังก์ชันต่าง ๆ**
   - ตรวจสอบการทำงานของ `applyCouponDiscount`, `applyCategoryDiscount`, `applyPointDiscount`, และ `applySeasonalDiscount` ให้คำนวณส่วนลดได้อย่างถูกต้อง
   - การจัดลำดับส่วนลดด้วย `sortDiscount`

### ตัวอย่างผลลัพธ์จากการรันการทดสอบ

```plaintext
$ jest
 PASS  src/__tests__/discount.test.ts
  DiscountModule
    Success
      Apply Coupon, On Top, and Seasonal Discount
        ✓ should apply Fixed Amount Coupon, Category Discount (On Top), and Seasonal Discount correctly
        ✓ should apply Percentage Coupon, Category Discount (On Top), and Seasonal Discount correctly
      Apply Fixed Amount Coupon and Category Discount (On Top)
        ✓ should apply Fixed Amount Coupon and Category Discount (On Top) correctly
      ...
    Error
      Invalid Cart Items
        ✓ should throw an error if cart item name is invalid
        ✓ should throw an error if cart item price is invalid
      Invalid Discounts
        ✓ should throw an error if multiple coupons are used
        ✓ should throw an error if discount type is invalid
    Function
      applyCouponDiscount
        ✓ applyCouponDiscount should apply fixed amount discount correctly
      ...
Test Suites: 1 passed, 1 total
Tests:       30 passed, 30 total
Snapshots:   0 total
Time:        0.996 s, estimated 1 s
Ran all test suites.
```
