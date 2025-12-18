# Configuration-First Design Guide

## Overview

Rakam Systems embraces a **configuration-first approach**, allowing you to modify system behavior without changing code. This guide demonstrates the power and convenience of using configurable agents and vectorstores.

## The Core Principle

**Write code once, change behavior through configuration.**

```python
# This code NEVER changes
config = loader.load_from_yaml(config_file)
agent = loader.create_agent("my_agent", config)
result = await agent.arun(user_input)
```

What changes: The `config_file` path or the contents of the YAML file.

## Why Configuration-First?

### 1. Rapid Iteration and Testing

Test different models, parameters, or behaviors without touching code:

```yaml
# Test 1: Fast and cheap
agents:
  my_agent:
    llm_config:
      model: openai:gpt-4o-mini
      temperature: 0.7

# Test 2: High quality (just edit the YAML!)
agents:
  my_agent:
    llm_config:
      model: openai:gpt-4o
      temperature: 0.5

# Test 3: Alternative provider
agents:
  my_agent:
    llm_config:
      model: mistral:mistral-large-latest
      temperature: 0.7
```

Your application code stays identical - just reload the config!

### 2. Environment-Specific Configurations

Use different configs for different environments without code changes:

```bash
project/
├── config/
│   ├── agent_config_dev.yaml      # Fast, cheap models
│   ├── agent_config_staging.yaml  # Mid-tier models
│   └── agent_config_prod.yaml     # Best models
└── app.py                         # Code stays the same!
```

```python
# app.py - Single codebase for all environments
import os
config_env = os.getenv("ENV", "dev")
config_file = f"config/agent_config_{config_env}.yaml"
config = loader.load_from_yaml(config_file)
```

### 3. A/B Testing and Optimization

Compare different configurations to optimize performance:

```yaml
# config_a.yaml - Approach A
agents:
  search_agent:
    llm_config:
      temperature: 0.3
      model: openai:gpt-4o
    
search:
  enable_hybrid_search: false
  similarity_metric: cosine

# config_b.yaml - Approach B (no code changes!)
agents:
  search_agent:
    llm_config:
      temperature: 0.7
      model: openai:gpt-4o-mini
    
search:
  enable_hybrid_search: true
  hybrid_alpha: 0.6
  similarity_metric: dot_product
```

Run both configurations with the same code and compare results.

### 4. Non-Developer Empowerment

Team members without coding expertise can:
- Tune model parameters
- Adjust prompts
- Enable/disable features
- Change search algorithms
- Modify chunk sizes

All without touching the codebase!

### 5. Risk Reduction

- **No code deployment** for configuration changes
- **Easy rollback** by reverting config files
- **Version control** for configurations separate from code
- **Test in isolation** without risking code stability

## Agent Configuration Examples

### Example 1: Switching Models

**Use Case**: You want to test if GPT-4o-mini is good enough for your use case.

```yaml
# Before (config/agent_config.yaml)
agents:
  customer_support:
    llm_config:
      model: openai:gpt-4o
      temperature: 0.7
      max_tokens: 2000

# After (just edit the YAML - no code changes!)
agents:
  customer_support:
    llm_config:
      model: openai:gpt-4o-mini  # Changed this line
      temperature: 0.7
      max_tokens: 2000
```

Your application code doesn't change at all - just reload the config!

### Example 2: Adjusting Agent Behavior

**Use Case**: You want to make responses more creative or more factual.

```yaml
# Factual mode
agents:
  writer_agent:
    llm_config:
      temperature: 0.2      # Low temperature for factual
      max_tokens: 1000

# Creative mode (just update config!)
agents:
  writer_agent:
    llm_config:
      temperature: 0.9      # High temperature for creativity
      max_tokens: 2000      # More tokens for longer responses
```

### Example 3: Toggling Features

**Use Case**: Enable tracking in development, disable in production.

```yaml
# config/agent_config_dev.yaml
agents:
  my_agent:
    enable_tracking: true
    tracking_output_dir: "./dev_tracking"

# config/agent_config_prod.yaml  
agents:
  my_agent:
    enable_tracking: false  # Disabled for production
```

### Example 4: Modifying System Prompts

**Use Case**: Refine prompts based on user feedback.

```yaml
# Version 1
prompts:
  assistant:
    system_prompt: |
      You are a helpful assistant.
      Answer questions concisely.

# Version 2 (improved based on feedback - no code changes!)
prompts:
  assistant:
    system_prompt: |
      You are a helpful assistant with expertise in technical topics.
      Provide detailed explanations with examples.
      Always cite sources when possible.
```

## Vectorstore Configuration Examples

### Example 1: Switching Embedding Models

**Use Case**: Test different embedding models for best search quality.

```yaml
# config/vectorstore_local.yaml - Free, local embeddings
embedding:
  model_type: sentence_transformer
  model_name: Snowflake/snowflake-arctic-embed-m
  batch_size: 128

# config/vectorstore_openai.yaml - Higher quality (just swap config!)
embedding:
  model_type: openai
  model_name: text-embedding-3-large
  batch_size: 100
```

Same application code - just use a different config file!

### Example 2: Toggling Hybrid Search

**Use Case**: Enable hybrid search to improve results without code changes.

```yaml
# Before - Vector search only
search:
  similarity_metric: cosine
  default_top_k: 5
  enable_hybrid_search: false

# After - Hybrid search enabled (no code changes!)
search:
  similarity_metric: cosine
  default_top_k: 5
  enable_hybrid_search: true
  hybrid_alpha: 0.7           # 70% vector, 30% keyword
  keyword_ranking_algorithm: bm25
```

### Example 3: Changing Search Algorithms

**Use Case**: Compare BM25 vs ts_rank for keyword search.

```yaml
# Test 1: BM25
search:
  keyword_ranking_algorithm: bm25
  keyword_k1: 1.2
  keyword_b: 0.75

# Test 2: ts_rank (just edit config!)
search:
  keyword_ranking_algorithm: ts_rank
```

### Example 4: Performance Tuning

**Use Case**: Optimize for speed vs memory.

```yaml
# High throughput config
embedding:
  batch_size: 256          # Larger batches
index:
  batch_insert_size: 10000 # Bulk inserts
  chunk_size: 512
database:
  pool_size: 20            # More connections

# Memory-efficient config (just swap!)
embedding:
  batch_size: 32           # Smaller batches
index:
  batch_insert_size: 1000
  chunk_size: 256
database:
  pool_size: 5
```

## Complete Workflow Example

### Scenario: RAG System Optimization

**Phase 1: Development**

```yaml
# config/dev.yaml - Fast iteration
agents:
  rag_agent:
    llm_config:
      model: openai:gpt-4o-mini  # Cheap and fast
      temperature: 0.7

vectorstore:
  embedding:
    model_type: sentence_transformer  # Free, local
    model_name: all-MiniLM-L6-v2
  search:
    enable_hybrid_search: false       # Simple for testing
```

**Phase 2: Testing Different Configurations**

```yaml
# config/test_high_quality.yaml - Test better models
agents:
  rag_agent:
    llm_config:
      model: openai:gpt-4o          # Better quality
      temperature: 0.5

vectorstore:
  embedding:
    model_type: openai              # Better embeddings
    model_name: text-embedding-3-large
  search:
    enable_hybrid_search: true      # Better search
    hybrid_alpha: 0.7
```

**Phase 3: Production**

```yaml
# config/prod.yaml - Optimized based on testing
agents:
  rag_agent:
    llm_config:
      model: openai:gpt-4o          # Quality matters
      temperature: 0.5
    enable_tracking: false          # No tracking overhead

vectorstore:
  embedding:
    model_type: openai
    model_name: text-embedding-3-large
    batch_size: 100                 # Optimized batch size
  search:
    enable_hybrid_search: true
    hybrid_alpha: 0.65              # Optimized after testing
  enable_caching: true              # Production performance
  cache_size: 5000
```

**Application Code (NEVER CHANGES):**

```python
import os
from rakam_system_core.ai_core.config_loader import ConfigurationLoader
from rakam_system_vectorstore import ConfigurablePgVectorStore, VectorStoreConfig

# Load config based on environment
env = os.getenv("ENV", "dev")
agent_config = ConfigurationLoader().load_from_yaml(f"config/{env}.yaml")
vs_config = VectorStoreConfig.from_yaml(f"config/{env}.yaml")

# Create components
agent = loader.create_agent("rag_agent", agent_config)
vectorstore = ConfigurablePgVectorStore(config=vs_config)

# Use them (same code for all environments)
async def search_and_answer(query):
    docs = vectorstore.search(query, top_k=5)
    context = "\n".join([doc['content'] for doc in docs])
    result = await agent.arun(f"Context: {context}\n\nQuestion: {query}")
    return result.output_text
```

## Best Practices

### 1. Version Control Your Configs

```bash
git/
├── config/
│   ├── agent_config_v1.yaml
│   ├── agent_config_v2.yaml  # Track iterations
│   └── agent_config_v3.yaml
```

### 2. Use Environment Variables

```python
import os
config_file = os.getenv("AGENT_CONFIG", "config/agent_config.yaml")
```

### 3. Validate Configs Before Use

```python
loader = ConfigurationLoader()
config = loader.load_from_yaml(config_file)

# Always validate!
is_valid, errors = loader.validate_config(config_file)
if not is_valid:
    for error in errors:
        print(f"Config error: {error}")
    exit(1)
```

### 4. Document Your Configs

```yaml
# config/agent_config_prod.yaml
# Production configuration for customer support agent
# Last updated: 2024-01-15
# Changes: Increased max_tokens from 1500 to 2000 for better responses

agents:
  support_agent:
    llm_config:
      model: openai:gpt-4o
      temperature: 0.7
      max_tokens: 2000  # Increased based on user feedback
```

### 5. Keep Configs DRY

```yaml
# Define reusable sections
common_settings: &common
  temperature: 0.7
  max_tokens: 2000

agents:
  agent1:
    llm_config:
      <<: *common
      model: openai:gpt-4o
  
  agent2:
    llm_config:
      <<: *common
      model: openai:gpt-4o-mini
```

## Summary

The configuration-first approach in Rakam Systems provides:

✅ **No code changes** for behavior modifications  
✅ **Rapid iteration** and testing  
✅ **Environment-specific** deployments  
✅ **A/B testing** capabilities  
✅ **Team collaboration** (non-developers can configure)  
✅ **Risk reduction** (no code deployment needed)  
✅ **Easy rollback** (just revert config file)  

**Remember**: Write your code once, then optimize and adapt through configuration!
