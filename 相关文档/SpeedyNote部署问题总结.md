# SpeedyNote 部署问题总结

部署时间：2026-05-05  
部署目录：`C:\Users\Administrator\SpeedyNote`  
最终可运行程序：`C:\Users\Administrator\SpeedyNote\build\speedynote.exe`

## 已完成结果

- 成功克隆 `https://github.com/alpha-liu-01/SpeedyNote.git`。
- 成功安装 MSYS2 到 `C:\msys64`。
- 成功安装 Windows x86_64 构建依赖，包括 clang64、CMake、Qt6、MuPDF、cppwinrt、ntldd 等。
- 成功运行 `compile.ps1 -norun` 完成编译。
- 成功部署 Qt runtime、MuPDF 和依赖 DLL。
- 已验证 `speedynote.exe` 可以启动运行。

## 部署过程中遇到的问题

### 1. GitHub 克隆失败

最初执行 `git clone` 时失败，原因是 Git 全局代理配置指向：

```text
http://127.0.0.1:7897
```

但该端口不可用，导致 Git 无法连接 GitHub。

随后尝试临时禁用代理直连 GitHub，也出现连接失败或连接被重置的问题。

处理方式：用户确认实际代理端口是 `7892`，之后使用临时 Git 参数指定代理：

```powershell
git -c http.proxy=http://127.0.0.1:7892 -c https.proxy=http://127.0.0.1:7892 clone https://github.com/alpha-liu-01/SpeedyNote.git
```

结果：仓库成功克隆。

### 2. 首次编译失败：缺少 MSYS2 clang64 工具链

运行：

```powershell
.\compile.ps1 -norun
```

失败信息显示找不到：

```text
C:\msys64\clang64\bin
```

原因是系统未安装 MSYS2，或未安装 clang64 构建环境。

处理方式：安装 MSYS2，并通过 pacman 安装项目所需依赖。

### 3. winget 安装 MSYS2 下载失败

尝试通过 winget 安装 MSYS2 时，winget 能找到包，但下载安装器失败：

```text
InternetOpenUrl() failed.
0x80072f0d
```

原因与网络代理或 TLS 信任有关。

尝试使用 winget 的 `--proxy` 参数时，又遇到 winget 限制：

```text
此功能需要由管理员启用。
winget settings --enable ProxyCommandLineOptions
```

处理方式：绕过 winget，直接下载安装器。

### 4. PowerShell Invoke-WebRequest 通过代理下载失败

使用 PowerShell `Invoke-WebRequest` 通过 `7892` 代理下载安装器时失败：

```text
未能为 SSL/TLS 安全通道建立信任关系
```

原因是代理环境下 TLS 证书信任失败。

处理方式：改用 `curl.exe -L -k --proxy http://127.0.0.1:7892` 下载 MSYS2 安装器，并使用 SHA256 校验确认文件完整性。

校验结果与 winget 元数据一致：

```text
8412BF15AC6311F117F8DB319B3411B27535EBF947D5E389A943DEC26FEEC7F6
```

结果：确认安装器可信后，静默安装到 `C:\msys64`。

### 5. pacman 安装依赖时镜像出现 404

安装 MSYS2 依赖时，pacman 从 `mirror.msys2.org` 下载部分包时出现 404，例如 Qt6、ICU、LLVM 相关包。

不过 pacman 后续仍完成了依赖安装，最终 clang、CMake、Qt6、windeployqt6、ntldd 等工具均验证可用。

验证结果包括：

```text
clang version 22.1.3
cmake version 4.3.1
windeployqt6=OK
ntldd=OK
```

### 6. Claude Code 自动更新失败

部署过程中还检查了 Claude Code 自动更新问题。执行 npm 全局更新时失败：

```text
EBUSY: resource busy or locked
claude.exe
```

原因是当前 Claude Code 会话正在运行，Windows 锁定了正在使用的 `claude.exe` 文件，导致 npm 无法覆盖更新。

处理方式：当前会话内无法完成更新。需要退出 Claude Code 后手动运行：

```powershell
npm --proxy http://127.0.0.1:7892 --https-proxy http://127.0.0.1:7892 install -g @anthropic-ai/claude-code
```

### 7. claude doctor 诊断卡住

执行 `claude doctor` 后没有有效输出，任务长时间无结果。

处理方式：停止该诊断进程，不影响 SpeedyNote 部署。

### 8. 当前还未生成正式安装包

项目已编译成可直接运行的便携版，但还没有生成 Windows 安装器。

原因是系统没有安装 Inno Setup，未检测到：

```text
C:\Program Files (x86)\Inno Setup 6\ISCC.exe
```

项目的安装包脚本是：

```text
C:\Users\Administrator\SpeedyNote\packaging.iss
```

如果后续要生成安装包，需要先安装 Inno Setup，然后执行该脚本。预期输出目录是：

```text
C:\Users\Administrator\SpeedyNote\Output
```

预期安装器名称类似：

```text
SpeedyNoteInstaller_1.4.4_amd64.exe
```

## 当前部署状态

当前已经可用的是便携版：

```text
C:\Users\Administrator\SpeedyNote\build\speedynote.exe
```

该目录中包含：

- `speedynote.exe`
- Qt6 运行库 DLL
- MuPDF 相关 DLL
- Qt 插件目录
- 翻译 `.qm` 文件

可以直接双击运行。

## 剩余建议

如果只是本机使用，目前已经足够。  
如果需要像普通 Windows 软件一样安装、卸载、创建快捷方式、关联 PDF 文件，则还需要：

1. 安装 Inno Setup 6。
2. 下载或补齐 Inno Setup 的 Chinese Simplified 语言文件。
3. 运行 `packaging.iss` 生成安装器。
4. 使用生成的安装器安装 SpeedyNote。
