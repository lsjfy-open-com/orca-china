<h1 align="center">
  <a href="https://github.com/lsjfy-open-com/orca-china"><img src="resources/build/icon.png" alt="Orca China" width="64" valign="middle" /></a> Orca China
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Linux-blue?style=for-the-badge" alt="Supported Platforms" />
  <img src="https://img.shields.io/badge/Localization-简体中文-success?style=for-the-badge" alt="Simplified Chinese Localization" />
  <a href="https://github.com/stablyai/orca"><img src="https://img.shields.io/badge/Upstream-Orca-111827?style=for-the-badge" alt="Upstream Orca" /></a>
</p>

<p align="center">
  <a href="README.md">简体中文</a> · <a href="https://github.com/stablyai/orca">上游 Orca</a>
</p>

<p align="center">
  <strong>面向中文用户的 Orca 汉化与独立打包版本。</strong><br/>
  并行运行 Claude Code、OpenClaude、Codex、Grok、Gemini、Antigravity、OpenCode 等 CLI 智能体，每个任务运行在独立 worktree 中，并在一个工作台内统一跟踪。<br/>
  支持 <strong>macOS、Windows 和 Linux</strong>。
</p>

<p align="center">
  <a href="#安装"><strong>下载安装</strong></a>
</p>

![Orca worktree IDE demo showing Claude Code, Codex, and OpenCode running in parallel across isolated git worktrees](docs/assets/file-drag.gif)

## 支持的智能体

Orca China 支持任意 CLI 智能体（_不限于下列工具_）。

<p>
  <a href="https://docs.anthropic.com/claude/docs/claude-code"><kbd><img src="docs/assets/claude-logo.svg" width="16" valign="middle" /> Claude Code</kbd></a> &nbsp;
  <a href="https://openclaude.gitlawb.com/"><kbd><img src="resources/openclaude-logo.png" width="16" valign="middle" /> OpenClaude</kbd></a> &nbsp;
  <a href="https://github.com/openai/codex"><kbd><img src="https://www.google.com/s2/favicons?domain=openai.com&sz=64" width="16" valign="middle" /> Codex</kbd></a> &nbsp;
  <a href="https://x.ai/cli"><kbd><img src="https://www.google.com/s2/favicons?domain=x.ai&sz=64" width="16" valign="middle" /> Grok</kbd></a> &nbsp;
  <a href="https://github.com/google-gemini/gemini-cli"><kbd><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64" width="16" valign="middle" /> Gemini</kbd></a> &nbsp;
  <a href="https://antigravity.google/docs/cli-overview"><kbd><img src="https://www.google.com/s2/favicons?domain=antigravity.google&sz=64" width="16" valign="middle" /> Antigravity</kbd></a> &nbsp;
  <a href="https://pi.dev"><kbd><img src="https://pi.dev/favicon.svg" width="16" valign="middle" /> Pi</kbd></a> &nbsp;
  <a href="https://omp.sh"><kbd><img src="https://omp.sh/favicon.svg" width="16" valign="middle" /> oh-my-pi</kbd></a> &nbsp;
  <a href="https://hermes-agent.nousresearch.com/docs/"><kbd><img src="https://www.google.com/s2/favicons?domain=nousresearch.com&sz=64" width="16" valign="middle" /> Hermes Agent</kbd></a> &nbsp;
  <a href="https://opencode.ai/docs/cli/"><kbd><img src="https://www.google.com/s2/favicons?domain=opencode.ai&sz=64" width="16" valign="middle" /> OpenCode</kbd></a> &nbsp;
  <a href="https://block.github.io/goose/docs/quickstart/"><kbd><img src="https://www.google.com/s2/favicons?domain=goose-docs.ai&sz=64" width="16" valign="middle" /> Goose</kbd></a> &nbsp;
  <a href="https://ampcode.com/manual#install"><kbd><img src="https://www.google.com/s2/favicons?domain=ampcode.com&sz=64" width="16" valign="middle" /> Amp</kbd></a> &nbsp;
  <a href="https://docs.augmentcode.com/cli/overview"><kbd><img src="https://www.google.com/s2/favicons?domain=augmentcode.com&sz=64" width="16" valign="middle" /> Auggie</kbd></a> &nbsp;
  <a href="https://github.com/autohandai/code-cli"><kbd><img src="https://www.google.com/s2/favicons?domain=autohand.ai&sz=64" width="16" valign="middle" /> Autohand Code</kbd></a> &nbsp;
  <a href="https://github.com/charmbracelet/crush"><kbd><img src="https://www.google.com/s2/favicons?domain=charm.sh&sz=64" width="16" valign="middle" /> Charm</kbd></a> &nbsp;
  <a href="https://docs.cline.bot/cline-cli/overview"><kbd><img src="https://www.google.com/s2/favicons?domain=cline.bot&sz=64" width="16" valign="middle" /> Cline</kbd></a> &nbsp;
  <a href="https://www.codebuff.com/docs/help/quick-start"><kbd><img src="https://www.google.com/s2/favicons?domain=codebuff.com&sz=64" width="16" valign="middle" /> Codebuff</kbd></a> &nbsp;
  <a href="https://commandcode.ai/docs/quickstart"><kbd><img src="https://www.google.com/s2/favicons?domain=commandcode.ai&sz=64" width="16" valign="middle" /> Command Code</kbd></a> &nbsp;
  <a href="https://docs.continue.dev/guides/cli"><kbd><img src="https://www.google.com/s2/favicons?domain=continue.dev&sz=64" width="16" valign="middle" /> Continue</kbd></a> &nbsp;
  <a href="https://cursor.com/cli"><kbd><img src="https://www.google.com/s2/favicons?domain=cursor.com&sz=64" width="16" valign="middle" /> Cursor</kbd></a> &nbsp;
  <a href="https://docs.factory.ai/cli/getting-started/quickstart"><kbd><img src="docs/assets/droid-logo.svg" width="16" valign="middle" /> Droid</kbd></a> &nbsp;
  <a href="https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli"><kbd><img src="https://www.google.com/s2/favicons?domain=github.com&sz=64" width="16" valign="middle" /> GitHub Copilot</kbd></a> &nbsp;
  <a href="https://kilo.ai/docs/cli"><kbd><img src="https://raw.githubusercontent.com/Kilo-Org/kilocode/main/packages/kilo-vscode/assets/icons/kilo-light.svg" width="16" valign="middle" /> Kilocode</kbd></a> &nbsp;
  <a href="https://www.kimi.com/code/docs/en/kimi-code-cli/getting-started.html"><kbd><img src="https://www.google.com/s2/favicons?domain=moonshot.cn&sz=64" width="16" valign="middle" /> Kimi</kbd></a> &nbsp;
  <a href="https://kiro.dev/docs/cli/"><kbd><img src="https://www.google.com/s2/favicons?domain=kiro.dev&sz=64" width="16" valign="middle" /> Kiro</kbd></a> &nbsp;
  <a href="https://github.com/mistralai/mistral-vibe"><kbd><img src="https://www.google.com/s2/favicons?domain=mistral.ai&sz=64" width="16" valign="middle" /> Mistral Vibe</kbd></a> &nbsp;
  <a href="https://github.com/QwenLM/qwen-code"><kbd><img src="https://www.google.com/s2/favicons?domain=qwenlm.github.io&sz=64" width="16" valign="middle" /> Qwen Code</kbd></a> &nbsp;
  <a href="https://support.atlassian.com/rovo/docs/install-and-run-rovo-dev-cli-on-your-device/"><kbd><img src="https://www.google.com/s2/favicons?domain=atlassian.com&sz=64" width="16" valign="middle" /> Rovo Dev</kbd></a>
</p>

---

## 功能特性

- **无需登录 Orca 账号**：直接使用你自己的 Claude Code、OpenClaude、Codex、Grok、Gemini 或 Antigravity 等订阅与 CLI。
- **原生 worktree 工作流**：每个任务都有独立 worktree，减少 stash 和频繁切分支的干扰。
- **多智能体终端**：在标签页和分屏中并行运行多个 AI 编程智能体，并快速查看活跃状态。
- **内置源代码管理**：查看 AI 生成的 diff、快速编辑，并在 Orca China 内完成提交。
- **代码托管集成**：将 PR、issue、Actions 检查等信息关联到对应 worktree。
- **SSH 支持**：连接远程机器，并从 Orca China 中运行远程智能体工作流。
- **通知与未读状态**：智能体完成任务或需要关注时及时提醒，方便稍后回到上下文。

## Orca China 变更说明

本分支基于上游 Orca 做了面向中文用户的本地化与独立打包调整：

- 将应用名称、包名、安装产物和命令行入口隔离为 **Orca China** / `orca-china`，避免覆盖或破坏已安装的上游 Orca。
- 新增完整 i18n 基础设施，集中管理英文与简体中文文案，并支持 UI 文案兜底翻译。
- 覆盖主界面、项目添加流程、侧边栏、设置页导航，以及设置页各 pane 中的常见静态文案。
- 按 AI 与计算机领域常用表达统一术语，例如“智能体”“AI 服务商账号”“智能体编排”“计算机控制”“工作区”“源代码管理”“遥测”等。
- 更新 Windows、macOS、Linux 打包脚本和发布产物命名，生成 `orca-china-*` 系列安装包与 CLI 启动器。

---

## 安装

### Windows

推荐分发编译产物中的安装包：

- **安装版**：`dist/orca-china-windows-setup.exe`
- **便携版**：`dist/Orca China-<version>-win.zip`

不要直接分发 `dist/win-unpacked/Orca China.exe`。它依赖同目录下的 Electron 运行时文件，单独复制这个 exe 通常无法启动。

### macOS 与 Linux

当前仓库已经保留 macOS 和 Linux 的独立应用标识、产物命名与 `orca-china` CLI 启动器。请使用本仓库构建产物，不要使用上游 Orca 的下载地址。

### 本地构建

```bash
corepack pnpm install
corepack pnpm run build

# Windows 打包
corepack pnpm run build:win
```

---

## 移动端伴侣应用

移动端伴侣应用来自上游 Orca，可用于从手机控制智能体。

<p align="center">
  <picture><source srcset="docs/assets/feature-wall/mobile-companion-app-showcase.gif" type="image/gif"><img src="docs/assets/feature-wall/mobile-companion-app-showcase.jpg" alt="Orca desktop with the mobile companion app" width="720" /></picture>
</p>

- **iOS:** [从 App Store 下载](https://apps.apple.com/us/app/orca-ide/id6766130217)
- **Android:** [从上游 GitHub Releases 下载 APK](https://github.com/stablyai/orca/releases/download/mobile-v0.0.11/app-release.apk)

---

## 上游功能展示

以下展示内容来自上游 Orca，用于了解核心工作流。

<p align="center">
  <a href="https://www.onorca.dev/docs/model/worktrees"><kbd><strong>Parallel Worktrees</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/parallel-worktrees.gif" type="image/gif"><img src="docs/assets/feature-wall/parallel-worktrees.jpg" alt="Parallel worktree orchestration" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/terminal"><kbd><strong>Terminal Splits</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/terminal-splits.gif" type="image/gif"><img src="docs/assets/feature-wall/terminal-splits.jpg" alt="Ghostty-class terminal splits" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/browser/design-mode"><kbd><strong>Design Mode</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/design-mode.gif" type="image/gif"><img src="docs/assets/feature-wall/design-mode.jpg" alt="Embedded browser and Design Mode" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/review/linear"><kbd><strong>GitHub &amp; Linear, Native</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/github-linear.gif" type="image/gif"><img src="docs/assets/feature-wall/github-linear.jpg" alt="GitHub and Linear task workflows in Orca" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/agents/supported"><kbd><strong>Every CLI Agent</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/cli-agents.gif" type="image/gif"><img src="docs/assets/feature-wall/cli-agents.jpg" alt="Works with every CLI agent" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/ssh"><kbd><strong>SSH Worktrees</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/ssh-worktrees.gif" type="image/gif"><img src="docs/assets/feature-wall/ssh-worktrees.jpg" alt="Remote worktrees over SSH" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/editing/file-explorer"><kbd><strong>Drag Files to Agents</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/file-drag.gif" type="image/gif"><img src="docs/assets/feature-wall/file-drag.jpg" alt="Drag files and images into an agent prompt" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/review/annotate-ai-diff"><kbd><strong>Annotate AI Diffs</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/annotate-diff.gif" type="image/gif"><img src="docs/assets/feature-wall/annotate-diff.jpg" alt="Annotate AI-generated diffs" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/cli/overview"><kbd><strong>Orca CLI</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/orca-cli.gif" type="image/gif"><img src="docs/assets/feature-wall/orca-cli.jpg" alt="Script Orca from the CLI" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/settings"><kbd><strong>Native Search</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/keyboard-native.gif" type="image/gif"><img src="docs/assets/feature-wall/keyboard-native.jpg" alt="Native search across Orca workflows" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/agents/usage-tracking"><kbd><strong>Account Switcher &amp; Usage Tracking</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/codex-accounts.gif" type="image/gif"><img src="docs/assets/feature-wall/codex-accounts.jpg" alt="Account switching and usage tracking" width="390" /></picture><br/></kbd></a> &nbsp;&nbsp;
  <a href="https://www.onorca.dev/docs/editing/markdown"><kbd><strong>Rich Repo Previews</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/markdown-editor.gif" type="image/gif"><img src="docs/assets/feature-wall/markdown-editor.jpg" alt="Markdown, images, PDFs, and repo document previews" width="390" /></picture><br/></kbd></a><br/><br/>
  <a href="https://www.onorca.dev/docs/model/tabs-panes-splits"><kbd><strong>Split Anything</strong><br/><br/><picture><source srcset="docs/assets/feature-wall/split-screen.gif" type="image/gif"><img src="docs/assets/feature-wall/split-screen.jpg" alt="Split panes for agents, terminals, browsers, and files" width="390" /></picture><br/></kbd></a>
</p>

---

## 社区与支持

- **Orca China 仓库:** [lsjfy-open-com/orca-china](https://github.com/lsjfy-open-com/orca-china)
- **上游 Orca:** [stablyai/orca](https://github.com/stablyai/orca)
- **上游社区:** 通过 **[Discord](https://discord.gg/fzjDKHxv8Q)** 参与 Orca 社区讨论。
- **反馈与想法:** Orca China 相关问题请优先在本仓库反馈；上游功能建议可提交到 [stablyai/orca issues](https://github.com/stablyai/orca/issues)。
- **隐私与遥测:** 匿名使用数据说明见上游 [privacy & telemetry docs](https://www.onorca.dev/docs/telemetry)。

---

## 开发

想参与开发或在本地运行？请参考 [CONTRIBUTING.md](.github/CONTRIBUTING.md)。
