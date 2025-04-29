import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Headphones,
  MessageCircle,
  Package,
  QrCode,
  RefreshCw,
  Shield,
  ShoppingCart,
  Truck,
  Users,
  Wallet,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-emerald-500" />
          <span className="text-xl font-bold">МЕГАВОДЯНОЙ</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Главная
          </Link>
          <Link href="/product" className="text-emerald-500 font-medium">
            О продукте
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Стоимость
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
            Контакты
          </Link>
        </nav>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Запустить бота</Button>
      </header>

      <main className="container mx-auto py-12 px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-white">О продукте</span>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Вернуться на главную</span>
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telegram-бот для монтажников сантехники</h1>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Наш Telegram-бот — это комплексное решение для монтажников сантехнического оборудования, которое позволяет
              автоматизировать рабочие процессы, увеличить доход и улучшить взаимодействие с клиентами. Все необходимые
              инструменты собраны в одном удобном интерфейсе, доступном прямо в Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Смотреть демо
              </Button>
            </div>
          </div>
        </section>

        {/* Main Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Основные возможности</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Заказ товаров</h3>
                <p className="text-gray-300">
                  Заказывайте сантехническое оборудование и комплектующие напрямую через бот. Доступен полный каталог
                  товаров с актуальными ценами и наличием на складе.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Быстрый поиск по каталогу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Сравнение товаров</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Сохранение избранных позиций</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <Truck className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Организация доставки</h3>
                <p className="text-gray-300">
                  Организуйте доставку заказанных товаров на объект или в удобное для вас место. Отслеживайте статус
                  доставки в режиме реального времени.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Выбор даты и времени доставки</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Отслеживание местоположения курьера</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Уведомления о статусе доставки</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <Headphones className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Дополнительные услуги</h3>
                <p className="text-gray-300">
                  Заказывайте дополнительные услуги для ваших клиентов: консультации, расчет материалов, проектирование
                  систем и многое другое.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Техническая консультация</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Расчет необходимых материалов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Проектирование инженерных систем</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <Wallet className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Бонусный баланс</h3>
                <p className="text-gray-300">
                  Отслеживайте свой бонусный баланс в режиме реального времени. Получайте уведомления о начислении новых
                  бонусов и возможностях их использования.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Детальная статистика начислений</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">История операций</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Прогноз накоплений</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <RefreshCw className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Вывод кэшбэка</h3>
                <p className="text-gray-300">
                  Выводите накопленный кэшбэк удобным для вас способом: на банковскую карту, электронный кошелек или
                  используйте для оплаты новых заказов.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Множество способов вывода</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Быстрые выплаты (до 24 часов)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Без скрытых комиссий</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <QrCode className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">QR-коды для клиентов</h3>
                <p className="text-gray-300">
                  Генерируйте уникальные QR-коды для ваших клиентов, которые дают им скидку при покупке у менеджера, а
                  вам — дополнительный кэшбэк.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Мгновенная генерация кодов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Отслеживание использования</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Настройка размера скидки</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </section>

        {/* Additional Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Дополнительные функции</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-500" />
                <span>Реферальная система</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Приглашайте других монтажников в систему и получайте дополнительный доход с их заказов. Многоуровневая
                реферальная программа позволяет зарабатывать даже на приглашенных вашими рефералами.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">До 5% с заказов ваших рефералов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">До 2% с заказов рефералов второго уровня</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Бонусы за активных рефералов</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Package className="h-5 w-5 text-emerald-500" />
                <span>Управление заказами</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Полный контроль над всеми вашими заказами в одном месте. Отслеживайте статусы, получайте уведомления об
                изменениях и управляйте документами.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">История всех заказов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Статусы и уведомления</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Электронные документы</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-emerald-500" />
                <span>Оплата заказов</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Удобная оплата заказов прямо в боте. Поддерживаются различные способы оплаты, включая банковские карты,
                электронные кошельки и оплату по счету.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Безопасные платежи</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Множество способов оплаты</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Автоматические чеки и квитанции</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-500" />
                <span>Техническая поддержка</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Получайте оперативную техническую поддержку прямо в боте. Наши специалисты готовы ответить на любые
                вопросы и помочь с решением проблем.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Поддержка 24/7</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Быстрые ответы на запросы</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">База знаний и обучающие материалы</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How to Start */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Как начать пользоваться</h2>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-4">Запустите бота</h3>
                  <p className="text-gray-300 mb-4">
                    Откройте Telegram и найдите нашего бота по имени @MegaVodyanoyBot или перейдите по ссылке.
                  </p>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Запустить бота</Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-4">Пройдите регистрацию</h3>
                  <p className="text-gray-300 mb-4">
                    Заполните простую форму регистрации, указав ваши контактные данные и информацию о деятельности.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Занимает не более 2 минут</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Требуется только базовая информация</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <div className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg h-full">
                  <h3 className="text-xl font-bold mb-4">Начните пользоваться</h3>
                  <p className="text-gray-300 mb-4">
                    После регистрации вам станут доступны все функции бота. Изучите интерфейс и начните работу.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Интуитивно понятный интерфейс</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">Обучающие подсказки</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Часто задаваемые вопросы</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Сколько стоит использование бота?</h3>
              <p className="text-gray-300">
                Использование бота абсолютно бесплатно для всех монтажников. Мы зарабатываем на комиссии от
                производителей сантехнического оборудования, часть которой возвращаем вам в виде кэшбэка.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Как происходит вывод кэшбэка?</h3>
              <p className="text-gray-300">
                Вывод кэшбэка доступен при накоплении минимальной суммы в 20 000 ₽. Вы можете вывести средства на
                банковскую карту, электронный кошелек или использовать для оплаты новых заказов. Процесс занимает до 24
                часов.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Какие товары доступны для заказа?</h3>
              <p className="text-gray-300">
                В каталоге представлен широкий ассортимент сантехнического оборудования от ведущих производителей:
                трубы, фитинги, запорная арматура, насосное оборудование, котлы, радиаторы и многое другое.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Как работает реферальная система?</h3>
              <p className="text-gray-300">
                Вы получаете уникальную реферальную ссылку, которой можете поделиться с коллегами. За каждого
                приглашенного монтажника вы получаете бонус, а также процент от его заказов в течение всего времени
                использования системы.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Можно ли использовать бота на нескольких устройствах?</h3>
              <p className="text-gray-300">
                Да, вы можете использовать бота на любом устройстве, где установлен Telegram. Все ваши данные
                синхронизируются автоматически, и вы всегда имеете доступ к актуальной информации.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Что делать, если возникли проблемы с ботом?</h3>
              <p className="text-gray-300">
                В случае возникновения любых проблем вы можете обратиться в нашу техническую поддержку прямо через бота,
                нажав на соответствующую кнопку в меню. Наши специалисты помогут решить вашу проблему в кратчайшие
                сроки.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы начать пользоваться нашим ботом?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Присоединяйтесь к тысячам монтажников, которые уже оптимизировали свою работу и увеличили доход с
                помощью нашего Telegram-бота
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Связаться с нами
                </Button>
              </div>
              <p className="text-sm text-gray-400 mt-4">Начните пользоваться сервисом прямо сейчас — это бесплатно!</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-12 pb-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-emerald-500" />
                <span className="text-lg font-bold">МЕГАВОДЯНОЙ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Инновационный IT-сервис для монтажников сантехнического оборудования
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="text-gray-400 hover:text-white transition-colors">
                    О продукте
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Стоимость
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Юридическая информация</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Публичная оферта
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Пользовательское соглашение
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@megavodyanoy.ru</li>
                <li className="text-gray-400">Телефон: +7 (800) 555-35-35</li>
                <li className="text-gray-400">Адрес: г. Москва, ул. Технологическая, д. 42</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                <p>ООО "МегаВодяной" | ИНН: 7712345678 | ОГРН: 1234567890123</p>
                <p>© 2023 МЕГАВОДЯНОЙ. Все права защищены.</p>
              </div>
              <div className="text-gray-400 text-sm">
                <p>Разработано в России 🇷🇺</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
