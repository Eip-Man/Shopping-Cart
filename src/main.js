import "./style.css";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S23 Ultra S918B/DS 256GB",
    price: 1049.99,
    quantity: 1,
    src: "/public/assets/samsunggalaxys23ultralavender.webp",
    alt: "Samsung Galaxy s23 Ultra 256GB",
  },

  {
    id: 2,
    name: "JBL Charge 3 Waterproof Portable Bluetooth Speaker",
    price: 109.99,
    quantity: 1,
    src: "/public/assets/JBLCharge3HeroCamoX11605x1605px.webp",
    alt: "JBL Charge 3 Waterproof Portable Bluetooth Speaker",
  },
  {
    id: 3,
    name: "GARMIN Fenix 7X 010-02541-11 Exclusive Version",
    price: 349.99,
    quantity: 1,
    src: "/public/assets/Fenix81.png",
    alt: "Garmin Fenix Exclusive Version",
  },
  {
    id: 4,
    name: "Beats Fit Pro - True Wireless Wireless Earbuds",
    price: 199.99,
    quantity: 1,
    src: "/public/assets/Grayherozoom.webp",
    alt: "Beats fit pro",
  },
  {
    id: 5,
    name: "JLab Epic Air Sport ANC True Wireless Earbuds",
    price: 99.99,
    quantity: 1,
    src: "/public/assets/jlab.webp",
    alt: "JLab Epic Air Sport ANC True Wireless Earbuds",
  },
];
const aside = document.getElementById("aside");
const htmlContain = document.getElementById("htmlContainer");
const section = document.createElement("section");
htmlContain.append(section, aside);
const divContainer = (nme, prc, qty, img, alte, id) => {
  const div = document.createElement("div");
  section.append(div);
  div.classList.add(
    "outline-2",
    "outline-gray-400/20",
    "rounded-xl",
    "py-2",
    "px-2",
    "mx-1.5",
    "mb-4.5",
    "md:grid",
    "md:grid-cols-2",
  );
  const div1 = document.createElement("div");
  div.append(div1);
  div1.classList.add("md:flex", "mx-1.5", "md:my-1.5");
  // image style
  const div2 = document.createElement("div");
  div1.append(div2);
  div2.classList.add(
    "rounded-md",
    "md:px-4",
    "md:my-auto",
    "md:bg-gray-400/10",
    "w-fit",
  );
  const div3 = document.createElement("div");
  div3.classList.add(
    "md:pl-3",
    "text-[15px]/5",
    "mr-2.5",
    "text-pretty",
    "md:my-auto",
  );
  div1.append(div3);
  const _name = document.createElement("p");
  _name.innerText = `${nme}`;
  div3.append(_name);
  _name.classList.add("font-semibold");
  const div4 = document.createElement("div");
  div3.append(div4);
  div4.classList.add("text-[14px]", "pt-0.5");
  const span = document.createElement("span");
  span.classList.add("opacity-70", "tracking-tight");
  const span2 = document.createElement("span");
  div4.append(span, span2);
  span2.classList.add("pl-1");
  span.innerText = "Color:";
  span2.innerText = "Phantom Black";
  // ---------------------------------------- divider
  const div2_5 = document.createElement("div");
  div.append(div2_5);
  div2_5.classList.add(
    "mt-2",
    "grid",
    "grid-cols-2",
    "space-y-4",
    "md:grid-cols-3",
    "md:gap-x-3",
  );
  // price
  const priceText = document.createElement("p");
  priceText.innerText = "Price";
  div2_5.append(priceText);
  priceText.classList.add("my-auto", "ml-1.5", "text-[14px]", "md:hidden");
  const _price = document.createElement("p");
  _price.innerText = `${prc}`;
  div2_5.append(_price);
  _price.classList.add(
    "text-end",
    "text-[18px]",
    "font-semibold",
    "md:col-2",
    "md:my-auto",
    "md:text-center",
  );
  // quantity
  const quantityText = document.createElement("p");
  quantityText.innerText = "Quantity";
  div2_5.append(quantityText);
  quantityText.classList.add("my-auto", "ml-1.5", "text-[14px]", "md:hidden");
  // num
  const div2_6 = document.createElement("div");
  div2_5.append(div2_6);
  div2_6.classList.add(
    "flex",
    "h-fit",
    "justify-self-end",
    "rounded-md",
    "bg-gray-400/10",
    "px-3.5",
    "md:row-1",
    "md:m-auto",
  );
  const div2_6_1 = document.createElement("div");
  div2_6.append(div2_6_1);
  div2_6_1.classList.add("flex", "space-x-1");

  const _image = document.createElement("img");
  _image.src = `${img}`;
  _image.alt = `${alte}`;
  div2.append(_image);
  _image.classList.add("w-17", "mb-2", "md:w-15");
  const minus = document.createElement("p");
  minus.innerText = "-";
  minus.classList.add(
    "font-bold",
    "cursor-pointer",
    "selection:bg-transparent",
    "text-xl",
  );
  const data = (minus.dataset.id = id);
  div2_6_1.append(minus);
  const spanTop = document.createElement("span");
  div2_6_1.append(spanTop);
  spanTop.classList.add("span");
  const _quantity = document.createElement("p");
  _quantity.innerText = `${qty}`;
  _quantity.classList.add("font-semibold", "my-auto");
  div2_6_1.append(_quantity);
  const spanX = document.createElement("span");
  div2_6_1.append(spanX);
  spanX.classList.add("span");
  // + and - references the product's ID when clicked to the buttons
  minus.addEventListener("click", () => {
    //converts element.ID to integer to match the variable to data types
    const minusResult = products.find(
      (element) => parseInt(element.id) === data,
    );
    // prevents negative values

    // switch the if statements minus to plus. vice versa
    if (minusResult.quantity == 1) {
      return;
    }
    _quantity.innerText = `${--minusResult.quantity}`;
    calculateSubtotal();
  });
  const plus = document.createElement("p");
  plus.innerText = "+";
  plus.classList.add(
    "font-bold",
    "cursor-pointer",
    "selection:bg-transparent",
    "text-xl",
  );
  div2_6_1.append(plus);
  plus.dataset.id = id;
  plus.addEventListener("click", () => {
    const result = products.find((element) => parseInt(element.id) === data);
    // prevents further input. maximum is 10
    if (result.quantity >= 10) {
      return;
    }
    _quantity.innerText = `${++result.quantity}`;
    calculateSubtotal();
  });
  //img
  const imgStyle = document.createElement("img");
  div2_5.append(imgStyle);
  imgStyle.classList.add(
    "hidden",
    "m-auto",
    "w-4",
    "opacity-30",
    "cursor-pointer",
    "duration-150",
    "ease-in-out",
    "md:block",
    "active:w-5",
    "focus:outline-2",
  );
  imgStyle.src = "/public/assets/trash-svgrepo-com.svg";
  imgStyle.alt = "trash icon";
};

for (let i = 0; i < products.length; i++) {
  const name = products[i].name;
  const price = products[i].price;
  const quantity = products[i].quantity;
  const image = products[i].src;
  const imgAlt = products[i].alt;
  const uid = products[i].id;
  const container = divContainer(name, price, quantity, image, imgAlt, uid);
}
// recalculates from 0 on every click and in sync with quality changes
const calculateSubtotal = () => {
  //initialization + holds the final accumulated value + reset(0)
  let num = 0;
  let discount = 0.1;
  let totalDiscount = 0;
  let tax = 0.7;
  let totalTax = 0;
  let totalCost = 0;
  for (let i = 0; i < products.length; i++) {
    const priceCalc = products[i].price;
    const quantityCalc = products[i].quantity;
    const subtotal = priceCalc * quantityCalc;
    const discountCalc = discount * subtotal;
    const _discountResult = (totalDiscount += discountCalc);
    const total = (num += subtotal);
    const taxCalc = tax * subtotal;
    const taxResult = (totalTax += taxCalc);
    totalCost = num - totalDiscount + totalTax;
  }
  const subPrice = document.getElementById("subPrice");
  subPrice.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(num);
  const _discount = document.getElementById("discount");
  _discount.innerText = `-${new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(totalDiscount)}`;
  const _tax = document.getElementById("tax");
  _tax.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(totalTax);
  const overall = document.getElementById("overall-total");
  overall.innerText = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(totalCost);
};

// window alert 
const winAlert_Reset = () => {
  const button = document.querySelectorAll("button")[1];
  button.addEventListener("click", () => {
    setTimeout(() => {
      window.alert("Thanks for the purchase!");
    }, 1000);
  });
};
winAlert_Reset();
