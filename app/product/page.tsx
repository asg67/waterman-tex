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
  Clock,
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
          <span className="text-xl font-bold">ВОДЯНОЙ АЙТИ</span>
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
        {/* <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Запустить бота</Button> */}
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telegram-бот для специалистов сантехники</h1>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Наш Telegram-бот — это комплексное решение для специалистов сантехнического оборудования, которое позволяет
              автоматизировать рабочие процессы, увеличить доход и улучшить взаимодействие с клиентами. Все необходимые
              инструменты собраны в одном удобном интерфейсе, доступном прямо в Telegram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
              </Button> */}
              {/* <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Смотреть демо
              </Button> */}
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
                Приглашайте других специалистов в систему и получайте дополнительный доход с их заказов. Многоуровневая
                реферальная программа позволяет зарабатывать даже на приглашенных вашими рефералами.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Кэшбэк с каждой продажи</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Личный кабинет с аналитикой</span>
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
                    Запустите Telegram-бота и пройдите простую регистрацию. Укажите ваши данные и начните пользоваться сервисом.
                  </p>
                  {/* <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">Запустить бота</Button> */}
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
        {/* Company & Technologies Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">О компании и технологиях</h2>

          <div className="space-y-8">
            {/* Company Info */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-emerald-500" />
                    <span>Информация о компании</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Полное наименование:</p>
                      <p className="font-bold">ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ВОДЯНОЙ АЙТИ"</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">ИНН:</p>
                      <p className="font-bold font-mono">7000025583</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">ОГРН:</p>
                      <p className="font-bold font-mono">1257000002764</p>
                    </div>
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <p className="text-sm text-gray-400 mb-1">Юридический адрес:</p>
                      <p className="font-bold">634003, г. Томск, ул. Октябрьский Взвоз, д. 1</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-4">Направления деятельности в области IT</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Разработка программного обеспечения</p>
                        <p className="text-sm text-gray-400">
                          Создание веб-приложений, мобильных приложений и Telegram-ботов
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Цифровая автоматизация бизнес-процессов</p>
                        <p className="text-sm text-gray-400">Внедрение IT-решений для оптимизации работы предприятий</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Разработка CRM и ERP систем</p>
                        <p className="text-sm text-gray-400">
                          Создание систем управления взаимоотношениями с клиентами
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Интеграция платежных систем</p>
                        <p className="text-sm text-gray-400">Подключение и настройка систем электронных платежей</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Техническая поддержка и сопровождение</p>
                        <p className="text-sm text-gray-400">Обслуживание и развитие IT-инфраструктуры клиентов</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Стек технологий и языки программирования</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-emerald-500">Frontend разработка</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>React.js / Next.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>TypeScript / JavaScript</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>HTML5 / CSS3</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Vue.js</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4 text-emerald-500">Backend разработка</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Node.js</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Python (Django/FastAPI)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>PHP (Laravel)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>PostgreSQL / MySQL</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Redis</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4 text-emerald-500">DevOps и инфраструктура</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Docker / Kubernetes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>AWS / Yandex Cloud</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Nginx / Apache</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Git / GitLab CI/CD</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span>Linux (Ubuntu/CentOS)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Simplified Pricing */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Стоимость разработки</h3>

              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-emerald-500/30 p-8 text-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <Clock className="h-8 w-8 text-emerald-500" />
                    <h4 className="text-3xl font-bold">Стоимость часа разработки</h4>
                  </div>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-emerald-500">1 500 ₽</span>
                    <span className="text-xl text-gray-300 ml-2">/ час</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <h5 className="font-bold mb-2 text-emerald-500">Что включено:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Разработка функционала</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Тестирование кода</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Документация</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Консультации</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <h5 className="font-bold mb-2 text-emerald-500">Типы проектов:</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Telegram-боты</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Веб-приложения</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>API интеграции</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                          <span>Автоматизация процессов</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
                    <p className="text-sm text-gray-300">
                      <strong>Примечание:</strong> Минимальный заказ составляет 8 часов. Точная оценка времени
                      предоставляется после анализа технического задания. Возможна работа по фиксированной стоимости
                      проекта.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 md:p-8">
              <h3 className="text-2xl font-bold mb-6">Разрабатываемые продукты</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-emerald-500">Telegram-бот для специалистов сантехники</h4>
                  <p className="text-gray-300 mb-4">
                    Основной продукт компании - комплексное решение для автоматизации работы специалистов
                    сантехнического оборудования с функциями заказа товаров, кэшбэка и реферальной системы.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Каталог сантехнического оборудования</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Система кэшбэка и бонусов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Генерация QR-кодов для клиентов</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Реферальная программа</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-700/30 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-emerald-500">Платформа для B2B автоматизации</h4>
                  <p className="text-gray-300 mb-4">
                    Универсальная платформа для создания отраслевых решений автоматизации бизнес-процессов в различных
                    сферах деятельности.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Модульная архитектура</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">API для интеграций</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Аналитика и отчетность</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm">Мобильные приложения</span>
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
                Использование бота абсолютно бесплатно для всех специалистов. Мы зарабатываем на комиссии от
                производителей сантехнического оборудования, часть которой возвращаем вам в виде кэшбэка.
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-3">Как происходит вывод кэшбэка?</h3>
              <p className="text-gray-300">
                Вывод кэшбэка доступен при накоплении определенной суммы. Вы можете вывести средства на
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
                приглашенного специалиста вы получаете бонус, а также процент от его заказов в течение всего времени
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
                Присоединяйтесь к тысячам специалистов, которые уже оптимизировали свою работу и увеличили доход с
                помощью нашего Telegram-бота
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Связаться с нами
                </Button> */}
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
                <span className="text-lg font-bold">ВОДЯНОЙ АЙТИ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Инновационный IT-сервис для специалистов сантехнического оборудования
              </p>
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
                {/* <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Публичная оферта
                  </Link>
                </li> */}
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Политика конфиденциальности
                  </Link>
                </li>
                {/* <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Пользовательское соглашение
                  </Link>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: MAT@WATERMAN-T.COM</li>
                <li className="text-gray-400">Адрес: 634003, г. Томск, ул. Октябрьский Взвоз, д. 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                <p>ООО "ВОДЯНОЙ АЙТИ" | ИНН: 7000025583 | ОГРН: 1257000002764</p>
                <p>© 2025 ВОДЯНОЙ АЙТИ. Все права защищены.</p>
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
