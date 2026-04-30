# Tag: cookbook

Provider-specific recipe collections — copy-paste reference code for working with a specific LLM API.

| Pack | Provider |
|------|----------|
| [`claude-cookbooks`](../packs/claude-cookbooks.md) | Anthropic / Claude API |
| [`openai-cookbook`](../packs/openai-cookbook.md) | OpenAI API |

## When this tag is relevant

- Project integrates a specific LLM provider via its SDK.
- Team needs working examples for RAG, tool calling, function calling, embeddings.
- Onboarding to a new LLM API.

## How to choose

- Anthropic / Claude API → `claude-cookbooks`.
- OpenAI API → `openai-cookbook`.
- Multi-provider → install both; cookbooks rarely conflict because they're isolated by provider.

## Notes

Cookbooks are notebooks + recipes, not frameworks. Copy patterns into your project; do not vendor the whole repo.
