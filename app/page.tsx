import Link from "next/link"
import { ArrowRight, CheckCircle, MessageCircle, QrCode, RefreshCw, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-emerald-500" />
          <span className="text-xl font-bold">ВОДЯНОЙ ТЕХ</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
            Возможности
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
            Как это работает
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
            Стоимость
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
            О компании
          </Link>
        </nav>
        {/* <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Запустить бота</Button> */}
      </header>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto py-20 px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div>
                <p className="text-emerald-500 font-medium mb-2">ИННОВАЦИОННЫЙ IT-СЕРВИС</p>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Цифровой помощник для монтажников сантехники
                </h1>
              </div>
              <p className="text-gray-300 text-lg md:text-xl">
                Управляйте заказами, получайте кэшбэк и бонусы, привлекайте клиентов — всё в одном Telegram-боте
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
                </Button> */}
                {/* <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Узнать больше
                </Button> */}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Shield className="h-4 w-4" />
                <span>Сервис соответствует требованиям Минцифры РФ</span>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">ВОДЯНОЙ ТЕХ</h3>
                    <p className="text-sm text-gray-400">Онлайн</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    Добро пожаловать в систему для монтажников! Что вы хотите сделать?
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-emerald-500/20 backdrop-blur-sm p-3 rounded-lg rounded-tr-none max-w-[80%]">
                      Показать мой кэшбэк
                    </div>
                  </div>
                  <div className="bg-gray-700/50 backdrop-blur-sm p-3 rounded-lg rounded-tl-none max-w-[80%]">
                    <p className="mb-2">Ваш текущий кэшбэк:</p>
                    <div className="bg-gray-800/70 rounded-lg p-4 flex items-center justify-between">
                      <span className="font-bold text-xl">12 500 ₽</span>
                      <Button size="sm" className="bg-emerald-500 hover:bg-emerald-600">
                        Вывести
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <input
                    type="text"
                    placeholder="Введите сообщение..."
                    className="flex-1 bg-gray-700/30 border border-gray-700 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <Button size="icon" className="rounded-full bg-emerald-500 hover:bg-emerald-600">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/30 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="container mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Возможности Telegram-бота</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Полный набор инструментов для эффективной работы монтажников сантехнического оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <RefreshCw className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Кэшбэк система</h3>
                <p className="text-gray-300">
                  Получайте кэшбэк с каждой продажи сантехнического оборудования через вашу реферальную ссылку
                </p>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <Users className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Реферальная система</h3>
                <p className="text-gray-300">
                  Приглашайте других монтажников и получайте дополнительные бонусы с их продаж и активности
                </p>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <QrCode className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">QR-коды для клиентов</h3>
                <p className="text-gray-300">
                  Генерируйте уникальные QR-коды для ваших клиентов, чтобы они получали скидки при покупке
                </p>
              </div>
            </Card>

            <Card className="bg-gray-800/50 backdrop-blur-xl border-gray-700 overflow-hidden group hover:border-emerald-500/50 transition-all duration-300">
              <div className="p-6">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/30 transition-colors">
                  <MessageCircle className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-2">Личный кабинет</h3>
                <p className="text-gray-300">
                  Отслеживайте статистику, управляйте профилем и выводите заработанные средства в удобном интерфейсе
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Demo Section */}
        {/* <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Интерфейс Telegram-бота</h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Интуитивно понятный и удобный интерфейс для эффективной работы
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-xl p-4 max-w-xs w-full">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                  <div className="bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">МЕГАВОДЯНОЙ</h3>
                    <p className="text-xs text-gray-400">Главное меню</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <button className="w-full bg-gray-700/50 hover:bg-gray-700/70 transition-colors text-left px-4 py-3 rounded-lg flex items-center gap-3">
                    <RefreshCw className="h-5 w-5 text-emerald-500" />
                    <span>Мой кэшбэк</span>
                  </button>
                  <button className="w-full bg-gray-700/50 hover:bg-gray-700/70 transition-colors text-left px-4 py-3 rounded-lg flex items-center gap-3">
                    <Users className="h-5 w-5 text-emerald-500" />
                    <span>Реферальная программа</span>
                  </button>
                  <button className="w-full bg-gray-700/50 hover:bg-gray-700/70 transition-colors text-left px-4 py-3 rounded-lg flex items-center gap-3">
                    <QrCode className="h-5 w-5 text-emerald-500" />
                    <span>Создать QR-код</span>
                  </button>
                  <button className="w-full bg-gray-700/50 hover:bg-gray-700/70 transition-colors text-left px-4 py-3 rounded-lg flex items-center gap-3">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <span>Личный кабинет</span>
                  </button>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-xl p-4 max-w-xs w-full">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                  <div className="bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">МЕГАВОДЯНОЙ</h3>
                    <p className="text-xs text-gray-400">Статистика</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Текущий баланс</span>
                      <span className="font-bold text-xl">12 500 ₽</span>
                    </div>
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>0 ₽</span>
                      <span>До вывода: 7 500 ₽</span>
                    </div>
                  </div>
                  <div className="bg-gray-700/30 rounded-lg p-4">
                    <p className="text-sm text-gray-300 mb-3">Статистика за месяц</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400">Клиентов</p>
                        <p className="font-bold text-lg">24</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400">Продаж</p>
                        <p className="font-bold text-lg">36</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400">Кэшбэк</p>
                        <p className="font-bold text-lg">8 200 ₽</p>
                      </div>
                      <div className="bg-gray-800/50 p-3 rounded-lg">
                        <p className="text-xs text-gray-400">Рефералы</p>
                        <p className="font-bold text-lg">3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-xl p-4 max-w-xs w-full">
                <div className="flex items-center gap-3 mb-4 border-b border-gray-700 pb-3">
                  <div className="bg-emerald-500 h-10 w-10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold">МЕГАВОДЯНОЙ</h3>
                    <p className="text-xs text-gray-400">QR-код для клиента</p>
                  </div>
                </div>
                <div className="space-y-4 text-center">
                  <p className="text-sm">QR-код для вашего клиента:</p>
                  <div className="bg-white p-4 rounded-lg mx-auto w-48 h-48 flex items-center justify-center">
                    <QrCode className="h-32 w-32 text-gray-900" />
                  </div>
                  <p className="text-xs text-gray-300">
                    Клиент получит скидку 5% при сканировании этого QR-кода у менеджера
                  </p>
                  <Button size="sm" className="w-full bg-emerald-500 hover:bg-emerald-600">
                    Отправить клиенту
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* How it works */}
        <section id="how-it-works" className="container mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Как это работает</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Всего 3 простых шага для начала работы с нашей системой
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative group hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2">Подключение к системе</h3>
              <p className="text-gray-300 mb-4">
                Запустите Telegram-бота и пройдите простую регистрацию. Укажите ваши данные и начните пользоваться
                сервисом.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Быстрая регистрация через Telegram</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Никаких дополнительных приложений</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Мгновенный доступ ко всем функциям</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative group hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2">Работа с клиентами</h3>
              <p className="text-gray-300 mb-4">
                Создавайте QR-коды для ваших клиентов, которые они могут использовать для получения скидок при покупке.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Генерация уникальных QR-кодов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Отслеживание использования кодов</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Автоматический учет продаж</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative group hover:border-emerald-500/50 transition-all duration-300">
              <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 pt-2">Получение бонусов</h3>
              <p className="text-gray-300 mb-4">
                Накапливайте кэшбэк с каждой продажи и выводите средства удобным для вас способом.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Кэшбэк с каждой продажи</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Бонусы за приглашенных монтажников</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300">Вывод средств и скидки на товары</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="container mx-auto py-12 px-4">
          <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-sm mb-4">
                  <Shield className="h-4 w-4" />
                  <span>Юридическая прозрачность</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Организация осуществляет деятельность в области информационных технологий</h2>
                <p className="text-gray-300 mb-6">
                  На официальном сайте размещена информация о направлениях деятельности в сфере информационных технологий, включая описание оказываемых услуг и разрабатываемых продуктов
                </p>
                {/* <div className="bg-gray-700/50 backdrop-blur-sm p-4 rounded-lg inline-block">
                  <p className="text-sm text-gray-300">Номер аккредитации:</p>
                  <p className="font-mono text-lg font-bold">РФ-XXXXXX-XXXX</p>
                </div> */}
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-gray-700/30 backdrop-blur-sm p-6 rounded-2xl max-w-md">
                  <h3 className="text-xl font-bold mb-4">Гарантии безопасности</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Защита персональных данных</p>
                        <p className="text-sm text-gray-400">В соответствии с ФЗ-152 "О персональных данных"</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Прозрачные финансовые операции</p>
                        <p className="text-sm text-gray-400">Все транзакции проводятся через российские банки</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Хранение данных на территории РФ</p>
                        <p className="text-sm text-gray-400">Серверы расположены в российских дата-центрах</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        {/* <section className="container mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Отзывы монтажников</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Узнайте, что говорят о нашем сервисе профессиональные монтажники сантехнического оборудования
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative">
              <div className="absolute -top-4 -right-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-emerald-500">АМ</span>
                </div>
                <div>
                  <h4 className="font-bold">Алексей Михайлов</h4>
                  <p className="text-sm text-gray-400">Монтажник, Москва</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Пользуюсь ботом уже 3 месяца. Очень удобно генерировать QR-коды для клиентов. За это время накопил уже
                больше 30 000 рублей кэшбэка. Рекомендую всем коллегам!"
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative">
              <div className="absolute -top-4 -right-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-emerald-500">ИС</span>
                </div>
                <div>
                  <h4 className="font-bold">Игорь Соколов</h4>
                  <p className="text-sm text-gray-400">Монтажник, Санкт-Петербург</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Отличный сервис для монтажников! Особенно нравится реферальная система. Пригласил 5 коллег и теперь
                получаю дополнительный доход с их продаж. Интерфейс простой и понятный."
              </p>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 relative">
              <div className="absolute -top-4 -right-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-4 mb-4 mt-2">
                <div className="h-12 w-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="font-bold text-emerald-500">ДК</span>
                </div>
                <div>
                  <h4 className="font-bold">Дмитрий Ковалев</h4>
                  <p className="text-sm text-gray-400">Монтажник, Екатеринбург</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Раньше было сложно отслеживать все заказы и бонусы. С этим ботом всё стало намного проще. Клиенты
                довольны скидками, а я получаю хороший кэшбэк. Всё прозрачно и честно."
              </p>
            </div>
          </div>
        </section> */}

        {/* Pricing Section */}
        <section id="pricing" className="container mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Стоимость использования</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Мы стремимся сделать наш сервис доступным для всех монтажников сантехнического оборудования
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-sm mb-4">
                  <CheckCircle className="h-4 w-4" />
                  <span>Специальное предложение</span>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-2">Навсегда бесплатно для монтажников</h3>
                    <p className="text-gray-300">Никаких скрытых платежей или комиссий</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <span className="text-3xl font-bold text-emerald-500">0 ₽</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-lg mb-4">Включено в бесплатный доступ:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>Полный доступ ко всем функциям бота</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>Неограниченное количество QR-кодов</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>Кэшбэк с каждой продажи</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>Реферальная программа</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <span>Личный кабинет с аналитикой</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-4">Как мы зарабатываем?</h4>
                    <p className="text-gray-300 mb-4">
                      Мы получаем комиссию от производителей сантехнического оборудования за каждую продажу, совершенную
                      через нашу систему. Это позволяет нам предоставлять сервис бесплатно для монтажников.
                    </p>
                    <p className="text-gray-300">
                      Вы получаете часть этой комиссии в виде кэшбэка, а мы - возможность развивать сервис дальше.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                    Начать пользоваться бесплатно <ArrowRight className="ml-2 h-4 w-4" />
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Company */}
        <section id="about" className="container mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">О компании</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Профессиональные IT-услуги для бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-3 py-1 rounded-full text-emerald-400 text-sm mb-2">
                    <Shield className="h-4 w-4" />
                    <span>Российская IT-компания</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Оказание IT-услуг для корпоративных клиентов</h3>
                  <p className="text-gray-300">
                    Мы предоставляем услуги в области информационных технологий, включая разработку, поддержку и сопровождение 
                    программных решений для бизнеса. Основным направлением работы является сотрудничество с корпоративными заказчиками
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2">2025 год</h4>
                    <p className="text-sm text-gray-300">	начало деятельности в области информационных технологий</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2">1 клиент</h4>
                    <p className="text-sm text-gray-300">основной корпоративный клиент — ООО «Промресурс»</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2">1 проект</h4>
                    <p className="text-sm text-gray-300">на стадии активной реализации</p>
                  </div>
                  <div className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Фокус на качестве</h4>
                    <p className="text-sm text-gray-300">услуг в сфере информационных технологий</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">Подробнее о компании</Button>
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    Связаться с нами
                  </Button> */}
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6">
              <h3 className="text-xl font-bold mb-6">Наши ценности</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Надежность и безопасность</h4>
                    <p className="text-sm text-gray-300">
                      Мы обеспечиваем высокий уровень защиты данных и стабильную работу всех наших сервисов.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Клиентоориентированность</h4>
                    <p className="text-sm text-gray-300">
                      Мы учитываем реальные потребности клиентов и стремимся к эффективным решениям
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <RefreshCw className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Развитие и совершенствование</h4>
                    <p className="text-sm text-gray-300">
                      Мы постоянно улучшаем наши подходы и внедряем современные технологии
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Открытость и прозрачность</h4>
                    <p className="text-sm text-gray-300">
                      Мы строим честные отношения с клиентами и партнерами, обеспечивая полную прозрачность всех
                      процессов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto py-20 px-4">
          <div className="bg-gradient-to-br from-emerald-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-gray-700 p-8 md:p-12 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full filter blur-3xl"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Готовы работать с нами?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Присоединяйтесь к нам, используй наш сервис и получай дополнительный доход
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <Button size="lg" className="bg-emerald-500 hover:bg-emerald-600 text-white">
                  Запустить Telegram-бота <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                  Узнать больше
                </Button> */}
              </div>
              <p className="text-sm text-gray-400 mt-4">Присоединяйтесь — сделаем больше вместе</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-emerald-500" />
                <span className="text-lg font-bold">ВОДЯНОЙ ТЕХ</span>
              </div>
              <p className="text-gray-400 text-sm">
                Инновационный IT-сервис для монтажников сантехнического оборудования
              </p>
              {/* <div className="flex gap-4">
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
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" />
                  </svg>
                </Link>
              </div> */}
            </div>

            <div>
              <h3 className="font-bold mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Возможности
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    Как это работает
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                    Стоимость
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    О компании
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
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Правовая информация
                  </Link>
                </li> */}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: info@водянойтех.ru</li>
                <li className="text-gray-400">Телефон: +7 (800) 555-35-35</li>
                <li className="text-gray-400">Адрес: г. Томск, ул. Октябрьский Взвоз, д. 1</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                <p>ООО "Водяной тех" | ИНН: сюда инн вставим | ОГРН: тоже вставить надо</p>
                <p>© 2025 Водяной тех Все права защищены.</p>
              </div>
              <div className="text-gray-400 text-sm">
                {/* <p>Разработано в России 🇷🇺</p> */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
