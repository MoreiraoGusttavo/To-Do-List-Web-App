-- Cria a tabela de tarefas no banco de dados
CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,      -- identificador único, auto-incremento
    txt VARCHAR(255) NOT NULL,   -- texto da tarefa (obrigatório)
    done BOOLEAN DEFAULT FALSE    -- status da tarefa (começa como não feita)
);
