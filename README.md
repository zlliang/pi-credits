![Cover](./assets/cover.png)

# pi-credits

A [pi](https://pi.dev/) extension that shows the active model provider's credit balance or rate-limit usage as a footer status.

- The status appears only while a supported provider is active and uses that provider's stored credential or API key.
- The status refreshes on session start, model switch, and after each turn that incurs usage.

## Supported providers

- **OpenAI Codex:** rate-limit usage of the 5-hour and weekly windows, as used percentages.
- **OpenRouter:** remaining credit balance in dollars.
- **Vercel AI Gateway:** remaining credit balance in dollars.

## Install

Install from npm:

```bash
pi install npm:pi-credits
```

Install from git:

```bash
pi install git:github.com/zlliang/pi-credits
```

## Other pi packages

- [pi-spark](https://github.com/zlliang/pi-spark): a small, opinionated collection of pi extensions.
