## Задание 1 
### Уровень 1. Проектирование
+ Выбирая между инструментами проектирования микрофронтенда выбирал между Webpack module federation и  Single SPA. 
Single SPA является framework agnostic и хорош, если на проекте используется несколько различных фреймворков. 
У нас используется react. Нам вполне подойдет Webpack Module Federation.
+ Для взимодействия микрофронтедов будем использовать библиотеку общего состояния.
+ Файлы с утилитами можно вынести в отдельный репозиторий и публиковать-импортировать как пакет в нужные микрофронтеды

#### Микрофронтенды:

Чтобы реализовать общее хранилище между микрофронтендами с использованием библиотеки глобального состояния 
(например, Redux), мы создадим отдельный микрофронтенд для экспорта хранилища и использовать его 
в других микрофронтендах.

Авторизацию и регистрацию выносим в отдельный микрофронтенд: это может быть полезно для масштабируемости и 
независимой поддержки-разработки

Микрофронтенд для взаимодействия-редактирования профиля пользователя (avatar, profile info)

Микрофронтед под карточку контента профиля: загрузка/удаление фотографий и описаний к ним, учет лайков. 
Кажется здесь дробить нечего на данном этапе.

## Задание 2
Декомпозиция backend монолита на микросервисы по функционалу и доменной области. [Схема](sprint_1_backend_02.drawio)






