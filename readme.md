# Клиентское приложение

## Инструкция для разработчиков

Необходимое программное обеспечение:

- Git (https://git-scm.com/)
- Node.js (https://nodejs.org/en/)
- yarn (https://yarnpkg.com/)
- Android Studio (https://developer.android.com/studio) и/или XCode (https://developer.apple.com/xcode/)

Скопируйте репозиторий себе на компьютер.

```
git clone https://github.com/microservices-course-itmo/frontend
```

Установите зависимости проекта.

```
yarn
```

Запустите сборщик Metro.

```
yarn start
```

Дальше, в открывшемся окне браузера, слева вы можете выбрать интересущий вас режим разработки:

- Run on Android device/emulator
- Run on iOS simulator
- Run in web browser

Также, выбор можно сделать из окна терминала заранее, добавив интересующую вас платформу.

```
yarn android
yarn ios
yarn web
```

> При изменении исходного кода проекта – сборщик автоматически увидит их: не стоит каждый раз перезапускать проект, после внесения изменений.

## Storybook

Для запуска Storybook необходимо сначала запустить сервер:

```bash
yarn storybook
```

Затем запустить Expo:

```bash
yarn start:sb
```

Запустив приложение на iOS/Android/Web будет отображен интерфейс Storybook
