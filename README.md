# AI Hub (v1.0.1)

<p align="center">
  <img src="Resources/AppIcon.png" alt="AI Hub Icon" width="128" height="128">
</p>

<p align="center">
  <strong>Native macOS Menu Bar Hub & Desktop Monitor for AI Quotas, Local Inference, System Telemetry, and Network Controls</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-macOS%2014.0%2B-black?style=flat-square&logo=apple" alt="macOS 14+">
  <img src="https://img.shields.io/badge/architecture-Apple%20Silicon-blue?style=flat-square&logo=apple" alt="Apple Silicon">
  <img src="https://img.shields.io/badge/version-1.0.1-green?style=flat-square" alt="Version 1.0.1">
  <img src="https://img.shields.io/badge/Swift-5.10-orange?style=flat-square&logo=swift" alt="Swift 5.10">
  <img src="https://img.shields.io/badge/license-MIT-purple?style=flat-square" alt="License MIT">
</p>

---

## 🌟 Overview

**AI Hub** is a lightweight, ultra-performant, native macOS status bar application and desktop widget suite designed for developers, AI engineers, and power users. Built from the ground up using **SwiftUI**, **AppKit**, and **WidgetKit**, AI Hub unifies cloud AI quota tracking, local AI model management, hardware telemetry, and fast network profile switching into a single, cohesive dashboard.

<p align="center">
  <img src="Resources/overview-preview.png" alt="AI Hub Dashboard Overview" width="460">
</p>

---

## ✨ Key Features

### 🖥️ Hardware Telemetry (This Mac)
- **Concentric Ring Gauges**: Real-time visual monitoring for Memory (Orange), CPU (Purple), and Disk (Teal).
- **Comprehensive Hardware Specs**:
  - **Memory**: Active usage, total capacity, real-time free memory, and kernel memory pressure.
  - **CPU & Thermal**: Apple Silicon processor identification, core count, thread count, and live package temperature (°C) without sudo.
  - **Top Processes**: Live top CPU and memory consumer ranking.
  - **Storage**: Used and total disk capacity, volume name, and available free space.
  - **Network Throughput**: Real-time Download (`↓`) and Upload (`↑`) throughput metrics and interface activity.

### ☁️ Cloud AI Quota Monitoring
- Real-time rate-limit tracking for major AI coding assistants and models:
  - **Antigravity (Google Cloud / Gemini)**: Auto-detected credentials from IDE with multi-window quota tracking (Gemini vs Claude/GPT).
  - **Codex (OpenAI)**
  - **Grok (xAI)**
  - **Claude (Anthropic)**
- Clean, equal-width cards with progress indicators and countdown timers to quota reset.
- Streamlined layout with compact sign-in controls for unconfigured providers.
- Secure OAuth authentication stored strictly in the native macOS Keychain.
 
### 💻 Local AI Inference Management
- Seamless integration with local inference engines:
  - **Rapid-MLX** (Apple Silicon MLX framework)
  - **Ollama**
  - **LM Studio**
- Real-time online/offline status, port configuration, active model names, memory footprints, and 1-click model unloading to free unified RAM.

### 🌐 Network Controls & ARP Scanner
- **ARP Network Scanner**: Fast local subnet discovery with real-time ARP table lookup and ping sweeps.
  - **Hardware OUI Detection**: Automatic identification for Enterprise Servers, SAN/NAS storage, Dell PowerEdge, HPE ProLiant, Synology, QNAP, and IP Cameras.
  - **Quick IP Copy**: Instant 1-click clipboard copy for IP and MAC addresses.
- **Fast Static IP Assignment**:
  - Optional Gateway (ideal for L2 isolated VLAN testing).
  - Smart subnet mask auto-completion (`255.255.255.X`).
  - Single-prompt macOS administrator authorization session.

### 🎨 Modular Tab Customization & Equal Width Bar
- Built-in Settings to toggle the visibility of any section:
  - **Overview**, **Cloud AI**, **System**, **AI Local**, **Controls**.
- Dynamic, automatically balanced segmented tab bar with pixel-perfect distribution across all screen sizes.

### 📌 Native macOS Desktop Widgets
- Standalone **WidgetKit Extension** supporting Small, Medium, and Large desktop widgets.
- Shared container architecture using sandboxed App Groups.

---

## 🚀 Installation & Requirements

### System Requirements
- **macOS**: Sonoma (14.0) or later
- **Architecture**: Apple Silicon (All Apple M-series chips: M1, M2, M3, M4, M5, M6 and later) or Intel Mac
- **Permissions**: Standard user permissions (Administrator prompt only requested on-demand when applying network static IP profiles)

### Download & Install
1. Download the latest `AI-Hub-v1.0.1.zip` from [GitHub Releases](https://github.com/b4chnh/AI-Hub/releases/latest).
2. Unzip the downloaded file.
3. Drag **AI Hub.app** into your `/Applications` folder.
4. Open **AI Hub** from `/Applications` or Spotlight. An icon will appear in your macOS menu bar.

---

## 💬 Feedback & Issues

If you encounter any issues or have feature requests, please [open an issue](https://github.com/b4chnh/AI-Hub/issues) on GitHub.

---

## 🔒 Security & Privacy

- **No Remote Telemetry**: AI Hub never collects, transmits, or logs your private data.
- **Keychain Security**: All OAuth tokens and API secrets reside exclusively in the native macOS Keychain.
- **Sandboxed Extension**: The WidgetKit extension communicates solely via sanitized read-only snapshots and never possesses token access.

---

## 🛠️ Tech Stack & Architecture

- **Language**: Swift 5.10 (Modern Concurrency, Swift 6 `@Observable`)
- **Frameworks**: SwiftUI, AppKit, WidgetKit, SystemConfiguration, Security, Network, CryptoKit
- **Packaging**: Hardened Runtime, Codesign, Sandboxed App Groups

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
