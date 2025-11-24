# Aquário Mapas

Este repositório contém os dados dos mapas dos prédios exibidos na plataforma Aquário. Os dados são organizados separando a geometria (layout) das informações das salas (metadata).

## 📁 Estrutura

O repositório está organizado por centro/unidade acadêmica. Atualmente, contém:

- `centro-de-informatica/` - Mapas do Centro de Informática da UFPB

Cada pasta de centro contém duas estruturas principais:

### 1. `mapas/` - Dados de Layout (Geometria)

Contém apenas informações sobre a geometria dos andares e salas:

```
centro-de-informatica/
└── mapas/
    └── building-1/
        ├── floor-subsolo.ts
        ├── floor-terreo.ts
        ├── floor-1.ts
        ├── floor-2.ts
        └── floor-3.ts
```

Cada arquivo de andar (`floor-*.ts`) contém:
- `id`: Identificador único do andar
- `name`: Nome do andar (ex: "3º Andar")
- `level`: Nível do andar (0 = térreo, 1 = primeiro andar, -1 = subsolo)
- `blueprint`: Dimensões do blueprint (width, height)
- `rooms`: Array de salas com apenas `id` e `shapes` (geometria)

### 2. `salas/` - Dados das Salas (Metadata)

Contém informações sobre as salas, seus tipos e propriedades:

```
centro-de-informatica/
└── salas/
    └── building-1/
        ├── floor-subsolo.ts
        ├── floor-terreo.ts
        ├── floor-1.ts
        ├── floor-2.ts
        └── floor-3.ts
```

Cada arquivo de andar (`floor-*.ts`) contém um array de objetos `Room` com:
- `id`: Identificador único (deve corresponder ao id no layout)
- `location`: Nome da sala (ex: "CI 312")
- `type`: Tipo da sala (ver tipos abaixo)
- Propriedades específicas do tipo (ex: `labs`, `professors`, `capacity`)

### 3. `types.ts` - Definições de Tipos

Arquivo central com todas as definições de tipos TypeScript usadas pelos dados.

## 🏗️ Tipos de Salas

### Tipos Disponíveis

1. **`classroom`** - Sala de aula
   - Propriedades: `capacity?` (número de pessoas)

2. **`lab-class`** - Laboratório de aula
   - Propriedades: `capacity?` (número de pessoas)

3. **`lab-research`** - Laboratório de pesquisa
   - Propriedades: `capacity?`, `labs: EntidadeSlug[]` (array de slugs de entidades)

4. **`professor-office`** - Gabinete de professor
   - Propriedades: `professors: string[]` (array de nomes de professores)

5. **`institutional-office`** - Escritório institucional
   - Propriedades: `department?` (departamento)

6. **`bathroom`** - Banheiro
   - Propriedades: `gender?: "male" | "female" | "unisex"`

7. **`corridor`** - Corredor

8. **`stairs`** - Escada

9. **`library`** - Biblioteca
   - Propriedades: `capacity?` (número de pessoas)

10. **`shared-space`** - Espaço compartilhado
    - Propriedades: `capacity?` (número de pessoas)

11. **`other`** - Outro tipo
    - Propriedades: `capacity?` (número de pessoas)

## 📝 Como Adicionar uma Nova Sala

### 1. Adicionar Layout (Geometria)

Edite o arquivo correspondente em `mapas/building-1/floor-*.ts`:

```typescript
import type { FloorLayout } from "../../../types";

export const floor3: FloorLayout = {
  id: "3rd-floor",
  name: "3º Andar",
  level: 3,
  blueprint: { width: 500, height: 355 },
  rooms: [
    {
      id: "ci-312",
      shapes: [
        {
          position: { x: 0, y: 0 },
          size: { width: 55, height: 135 }
        }
      ]
    },
    // ... outras salas
  ],
};
```

### 2. Adicionar Metadata da Sala

Edite o arquivo correspondente em `salas/building-1/floor-*.ts`:

```typescript
import type { Room } from "../../../types";

export const rooms: Room[] = [
  {
    id: "ci-312",
    location: "CI 312",
    type: "lab-research",
    description: "Laboratório de Pesquisa",
    labs: ["lmi"], // Slugs de entidades do aquario-entidades
  },
  // ... outras salas
];
```

**Importante:** O `id` deve corresponder exatamente ao `id` usado no layout!

### 3. Exemplo Completo: Sala de Aula

**Layout (`mapas/building-1/floor-1.ts`):**
```typescript
{
  id: "ci-101",
  shapes: [
    {
      position: { x: 100, y: 50 },
      size: { width: 80, height: 60 }
    }
  ]
}
```

**Metadata (`salas/building-1/floor-1.ts`):**
```typescript
{
  id: "ci-101",
  location: "CI 101",
  type: "classroom",
  description: "Sala de aula",
  capacity: 40
}
```

### 4. Exemplo: Gabinete de Professor

**Layout:**
```typescript
{
  id: "ci-227",
  shapes: [
    {
      position: { x: 200, y: 100 },
      size: { width: 40, height: 40 }
    }
  ]
}
```

**Metadata:**
```typescript
{
  id: "ci-227",
  location: "CI 227",
  type: "professor-office",
  description: "Gabinete de Professor",
  professors: ["João Silva", "Maria Santos"]
}
```

### 5. Exemplo: Laboratório de Pesquisa com Múltiplos Labs

**Metadata:**
```typescript
{
  id: "ci-313",
  location: "CI 313",
  type: "lab-research",
  description: "Laboratório de Pesquisa",
  labs: ["compose", "lia", "dat", "avis", "laqss"]
}
```

Os slugs em `labs` devem corresponder aos nomes dos arquivos JSON em `aquario-entidades/centro-de-informatica/` (sem a extensão `.json`).

## 🔗 Integração com aquario-entidades

As salas do tipo `lab-research` podem referenciar entidades do repositório `aquario-entidades` através do campo `labs`, que aceita um array de slugs de entidades.

**Exemplo:**
- Se existe `aquario-entidades/centro-de-informatica/lmi.json`, use o slug `"lmi"`
- Se existe `aquario-entidades/centro-de-informatica/tril.json`, use o slug `"tril"`

O sistema automaticamente:
- Busca as informações da entidade pelo slug
- Exibe o logo da entidade no mapa
- Mostra os detalhes da entidade no modal de detalhes da sala

## 📐 Convenções de Coordenadas

- **Origem (0,0)**: Canto superior esquerdo do blueprint
- **Eixo X**: Aumenta da esquerda para a direita
- **Eixo Y**: Aumenta de cima para baixo
- **Unidades**: Pixels (relativos ao tamanho do blueprint)

## ✅ Checklist para Nova Sala

Antes de fazer commit, verifique:

- [ ] O `id` da sala no layout corresponde ao `id` na metadata
- [ ] O `type` da sala é um dos tipos válidos
- [ ] As propriedades específicas do tipo estão presentes (ex: `labs` para `lab-research`, `professors` para `professor-office`)
- [ ] Os slugs em `labs` correspondem a entidades existentes em `aquario-entidades`
- [ ] As coordenadas e dimensões estão corretas
- [ ] O `location` é descritivo e claro

## 🚀 Publicação

Após adicionar ou editar conteúdo:

1. Faça commit e push para este repositório:

```bash
git add .
git commit -m "feat: adicionar sala CI 312"
git push
```

2. O repositório principal do Aquário será atualizado:
   - Automaticamente via GitHub Actions, ou
   - Manualmente pelos mantenedores

3. O conteúdo aparecerá no site após a próxima build!

## 🏢 Adicionar um Novo Prédio

Para adicionar mapas de um novo prédio:

1. Crie a estrutura de pastas em `mapas/` e `salas/`:
   ```
   centro-de-informatica/
   ├── mapas/
   │   └── building-2/
   │       └── floor-1.ts
   └── salas/
       └── building-2/
           └── floor-1.ts
   ```

2. Adicione os dados seguindo a mesma estrutura dos outros prédios

3. O sistema detectará automaticamente os novos prédios

## 📞 Dúvidas?

Se tiver dúvidas sobre como organizar os dados ou adicionar uma sala específica, abra uma issue neste repositório ou entre em contato com a equipe do Aquário.

---

**Mantido pela comunidade Aquário UFPB** 🐟

