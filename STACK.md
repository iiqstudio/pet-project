# Fullstack Stack

## Проект

Trello-like kanban-приложение для практики React на уровне middle с простым Python backend.

## Frontend

- `React`
- `TypeScript`
- `Vite`
- `React Router`
- `Zustand`
- `TanStack Query`
- `React Hook Form`
- `zod`
- `dnd-kit`
- `Tailwind CSS`
- `shadcn/ui`
- `clsx`
- `tailwind-merge`

## Backend

- `Python 3.12+`
- `FastAPI`
- `SQLModel`
- `SQLite` на старте
- `PostgreSQL` как следующий шаг
- `JWT` auth
- `Pydantic`
- `Uvicorn`

## Почему такой стек

- `Zustand` отвечает за клиентское состояние: фильтры, модалки, выбранную доску, локальные UI-флаги.
- `TanStack Query` отвечает за серверные данные: задачи, колонки, доски, mutations, cache.
- `React Hook Form` + `zod` упрощают формы и валидацию.
- `dnd-kit` подходит для drag-and-drop карточек и колонок.
- `Tailwind CSS` + `shadcn/ui` дают быстрый и аккуратный UI без лишней тяжести.
- `FastAPI` позволяет быстро поднять понятный REST API.
- `SQLModel` хорошо подходит для простого pet-project backend без лишней сложности.

## Границы ответственности

### Frontend

- Авторизация и хранение сессии
- Доски, колонки, карточки
- Drag-and-drop
- Поиск и фильтры
- Формы создания и редактирования
- Оптимистичные обновления там, где это уместно

### Backend

- REST API для auth, boards, columns, tasks
- Валидация входных данных
- Хранение пользователей и задач
- JWT-аутентификация
- Базовые права доступа: пользователь видит только свои доски

## Минимальный API

- `POST /auth/register`
- `POST /auth/login`
- `GET /boards`
- `POST /boards`
- `GET /boards/{board_id}`
- `PATCH /boards/{board_id}`
- `DELETE /boards/{board_id}`
- `POST /columns`
- `PATCH /columns/{column_id}`
- `DELETE /columns/{column_id}`
- `POST /tasks`
- `PATCH /tasks/{task_id}`
- `DELETE /tasks/{task_id}`

## Старт без переусложнения

### Сначала

- Frontend на моках
- Один пользователь или упрощённая auth-модель
- Backend на `FastAPI + SQLite`
- Базовый CRUD без realtime

### Потом

- `PostgreSQL`
- Совместный доступ к доске
- Activity log
- Комментарии к задачам
- WebSocket realtime
- Загрузка вложений

## Рекомендуемая структура

### Frontend

```text
frontend/
  src/
    app/
    pages/
    widgets/
    features/
    entities/
    shared/
```

### Backend

```text
backend/
  app/
    api/
    models/
    schemas/
    services/
    core/
    db/
```

## Итог

Это практичный стек для сильного pet-project: достаточно современный, чтобы выглядеть актуально, и достаточно простой, чтобы не утонуть в инфраструктуре.
