import { Component, inject } from '@angular/core';
import { AllserveService } from '../allserve.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-savat',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './savat.component.html',
  styleUrl: './savat.component.css'
})
export class SavatComponent {
  server = inject(AllserveService);
  
  // Buyurtma berish oynasini boshqarish uchun
  showOrderModal = false;
  
  // Buyurtma holati
  orderStatus: 'cart' | 'ordered' | 'delivered' = 'cart';
  
  // Buyurtma ma'lumotlari
  orderData = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card',
    notes: ''
  };

  // Form xatolari
  formErrors: any = {};

  // Jami summani hisoblash
  getTotalPrice(): number {
    return this.server.savatWithUpdatedStatus().reduce((total, item) => {
      return total + (item.price * (item.num || 1));
    }, 0);
  }

  // Mahsulot sonini oshirish
  increaseQuantity(itemId: number) {
    if (this.orderStatus === 'ordered') return; // Buyurtma berilgan bo'lsa o'zgartirishni taqiqlash
    
    const currentSavat = this.server.savat();
    const updatedSavat = currentSavat.map(item => {
      if (item.id === itemId) {
        return { ...item, num: (item.num || 1) + 1 };
      }
      return item;
    });
    this.server.savat.set(updatedSavat);
  }

  // Mahsulot sonini kamaytirish
  decreaseQuantity(itemId: number) {
    if (this.orderStatus === 'ordered') return; // Buyurtma berilgan bo'lsa o'zgartirishni taqiqlash
    
    const currentSavat = this.server.savat();
    const item = currentSavat.find(item => item.id === itemId);
    
    if (item && (item.num || 1) <= 1) {
      // Agar miqdor 1 ga teng yoki kichik bo'lsa, savatdan olib tashlash
      this.server.removeFromSavat(itemId);
    } else {
      // Miqdorni kamaytirish
      const updatedSavat = currentSavat.map(item => {
        if (item.id === itemId) {
          return { ...item, num: (item.num || 1) - 1 };
        }
        return item;
      });
      this.server.savat.set(updatedSavat);
    }
  }

  // Savatni tozalash
  clearCart() {
    if (this.orderStatus === 'ordered') {
      // Buyurtma berilgan bo'lsa, faqat holatni o'zgartirish
      this.orderStatus = 'cart';
      return;
    }
    
    // Barcha itemlarning basket holatini false qilish
    const savatItems = this.server.savat();
    savatItems.forEach(item => {
      this.server.basket(item.id);
    });
    
    // Savatni tozalash
    this.server.savat.set([]);
  }

  // Buyurtma berish oynasini ochish
  openOrderModal() {
    this.showOrderModal = true;
    document.body.style.overflow = 'hidden'; // Body scroll ni to'xtatish
  }

  // Buyurtma berish oynasini yopish
  closeOrderModal() {
    this.showOrderModal = false;
    document.body.style.overflow = 'auto'; // Body scroll ni tiklash
    this.resetOrderForm();
  }

  // Formani tozalash
  resetOrderForm() {
    this.orderData = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'card',
      notes: ''
    };
    this.formErrors = {};
  }

  // Form validatsiyasi
  validateForm(): boolean {
    this.formErrors = {};
    let isValid = true;

    // Ism validatsiyasi
    if (!this.orderData.firstName.trim()) {
      this.formErrors.firstName = 'Ism majburiy maydon';
      isValid = false;
    } else if (!/^[a-zA-Zа-яё\s]+$/u.test(this.orderData.firstName.trim())) {
      this.formErrors.firstName = 'Ism faqat harflardan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Familiya validatsiyasi
    if (!this.orderData.lastName.trim()) {
      this.formErrors.lastName = 'Familiya majburiy maydon';
      isValid = false;
    } else if (!/^[a-zA-Zа-яё\s]+$/u.test(this.orderData.lastName.trim())) {
      this.formErrors.lastName = 'Familiya faqat harflardan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Telefon validatsiyasi
    if (!this.orderData.phone.trim()) {
      this.formErrors.phone = 'Telefon raqam majburiy maydon';
      isValid = false;
    } else if (!/^\+?[0-9\s\-()]{9,15}$/.test(this.orderData.phone.trim())) {
      this.formErrors.phone = 'Telefon raqam noto\'g\'ri formatda';
      isValid = false;
    }

    // Email validatsiyasi (ixtiyoriy, lekin agar kiritilgan bo'lsa)
    if (this.orderData.email.trim() && 
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.orderData.email.trim())) {
      this.formErrors.email = 'Email manzil noto\'g\'ri formatda';
      isValid = false;
    }

    // Manzil validatsiyasi
    if (!this.orderData.address.trim()) {
      this.formErrors.address = 'Manzil majburiy maydon';
      isValid = false;
    }

    // Shahar validatsiyasi
    if (!this.orderData.city.trim()) {
      this.formErrors.city = 'Shahar majburiy maydon';
      isValid = false;
    } else if (!/^[a-zA-Zа-яё\s\-']+$/u.test(this.orderData.city.trim())) {
      this.formErrors.city = 'Shahar nomi faqat harflardan iborat bo\'lishi kerak';
      isValid = false;
    }

    // Pochta indeksi validatsiyasi (ixtiyoriy)
    if (this.orderData.postalCode.trim() && 
        !/^\d{5,6}$/.test(this.orderData.postalCode.trim())) {
      this.formErrors.postalCode = 'Pochta indeksi 5-6 ta raqamdan iborat bo\'lishi kerak';
      isValid = false;
    }

    return isValid;
  }

  // Buyurtmani tasdiqlash
  confirmOrder() {
    // Form validatsiyasi
    if (!this.validateForm()) {
      return;
    }

    // Buyurtma ma'lumotlarini shakllantirish
    const orderDetails = {
      customer: this.orderData,
      items: this.server.savatWithUpdatedStatus(),
      totalPrice: this.getTotalPrice(),
      orderDate: new Date().toISOString(),
      orderId: 'ORD-' + Date.now()
    };

    console.log('Buyurtma:', orderDetails);

    // Bu yerda serverga buyurtma yuborish logikasi bo'ladi
    alert(`Buyurtma muvaffaqiyatli qabul qilindi!\nBuyurtma raqami: ${orderDetails.orderId}\nJami summa: $${orderDetails.totalPrice}`);

    // Buyurtma holatini o'zgartirish
    this.orderStatus = 'ordered';
    
    // Oynani yopish (savatni tozalamaslik)
    this.closeOrderModal();
    
    // 3 sekund keyin "yetkazildi" holatiga o'tkazish (demo uchun)
    setTimeout(() => {
      if (this.orderStatus === 'ordered') {
        this.orderStatus = 'delivered';
        alert('Buyurtmangiz yetkazildi! Savatni tozalash uchun "Yangi buyurtma" tugmasini bosing.');
      }
    }, 5000);
  }

  // Yangi buyurtma uchun savatni tozalash
  startNewOrder() {
    // Barcha itemlarning basket holatini false qilish
    const savatItems = this.server.savat();
    savatItems.forEach(item => {
      this.server.basket(item.id);
    });
    
    // Savatni tozalash va holatni tiklash
    this.server.savat.set([]);
    this.orderStatus = 'cart';
  }

  // Sevimli mahsulotga qo'shish/olib tashlash
  toggleFavorite(item: any) {
    if (this.orderStatus === 'cart') {
      this.server.addToFav(item);
      this.server.liked(item.id);
    }
  }

  // Modal tashqarisiga bosilganda yopish
  onModalBackdropClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeOrderModal();
    }
  }
}