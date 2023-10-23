const validEmail = [];
const blackList = [];
const emailsInBlackList = [];
const emails = [];

function getValidEmail() {
    for (let email of validEmail) {
        if (email) {
            console.log('Валидный емаил!' + validEmail);
            emails.push;
        }    
    }
    for (let email of blackList) {
        if (email) {
            console.log('Не валидные емаил!' + blackList);
            emailsInBlackList.push;
        }
    }
}
getValidEmail(emails);

function cart(basketAmount, countGoods, promo = null) {
    if (promo = 'дарим300' && basketAmount < 300) {
        totalAmount = 0;
        console.log('Стоимость равна' + totalAmount);
    } else if (promo = 'дарим300') {
        const totalAmount = basketAmount - 300;
        console.log('Стоимость равна' + totalAmount);
    } else if (countGoods >= 10) {
        const countFiveProcent = basketAmount/100*5;
        totalAmount = basketAmount - countFiveProcent;
        console.log('Стоимость равна' + totalAmount);
    } else if (basketAmount > 50000) {
        const countTwentyProcent = basketAmount/100*20;
        const countDifference = basketAmount - 50000;
        totalAmount = countDifference - countTwentyProcent;
        console.log('Стоимость равна' + totalAmount);
    } else if (promo = 'скидка15' && basketAmount >= 20000) {
        const countFifteenProcent = basketAmount/100*15;
        totalAmount = basketAmount - countFifteenProcent;
        console.log('Стоимость равна' + totalAmount);
    }
}
cart(1000, 2, 'дарим300');