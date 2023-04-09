import{_ as n,W as a,X as l,Y as e,Z as t,$ as d,a0 as i,C as c}from"./framework-805f0bea.js";const s="/assets/img/nvm1.png",r="/assets/img/nvm2.png",m="/assets/img/nvm3.png",g="/assets/img/nvm4.png",p="/assets/img/nvm5.png",v="/assets/img/cmd.png",f="/assets/img/nodelist.png",h="/assets/img/nvmsuccess.png",u={},_=i('<h1 id="nvm-安装与使用" tabindex="-1"><a class="header-anchor" href="#nvm-安装与使用" aria-hidden="true">#</a> Nvm 安装与使用</h1><p>nvm 是一个 nodejs 的版本管理工具。通过它可以安装和切换不同版本的 nodejs，解决 node 各种版本存在不兼容现象。</p><h2 id="卸载node-没有安装可跳过此步骤" tabindex="-1"><a class="header-anchor" href="#卸载node-没有安装可跳过此步骤" aria-hidden="true">#</a> 卸载Node (没有安装可跳过此步骤)</h2><p>一定要确保卸载windows上的Nodejs。</p><ul><li>在控制面版或者应用列表中卸载nodejs</li><li>不行就全局搜索然后删除相关文件</li></ul><h2 id="下载nvm" tabindex="-1"><a class="header-anchor" href="#下载nvm" aria-hidden="true">#</a> 下载Nvm</h2>',6),x={href:"https://github.com/coreybutler/nvm-windows/releases/tag/1.1.9",target:"_blank",rel:"noopener noreferrer"},b=i('<p>我的电脑为win11，该版本可正常使用。</p><figure><img src="'+s+'" alt="安装包" tabindex="0" loading="lazy"><figcaption>安装包</figcaption></figure><h2 id="安装nvm" tabindex="-1"><a class="header-anchor" href="#安装nvm" aria-hidden="true">#</a> 安装Nvm</h2><p>下载完成后，解压获得exe程序双击运行。</p><ol><li>选择同意安装协议</li></ol><figure><img src="'+r+'" alt="安装协议" tabindex="0" loading="lazy"><figcaption>安装协议</figcaption></figure><ol start="2"><li>Nvm安装路径，会包含所有之后下载的Node版本</li></ol><figure><img src="'+m+'" alt="安装路径" tabindex="0" loading="lazy"><figcaption>安装路径</figcaption></figure><ol start="3"><li>Nodejs存储路径，存放当前使用的Node</li></ol><figure><img src="'+g+'" alt="存储路径" tabindex="0" loading="lazy"><figcaption>存储路径</figcaption></figure><ol start="4"><li>点击install，等待安装完成</li></ol><figure><img src="'+p+'" alt="安装" tabindex="0" loading="lazy"><figcaption>安装</figcaption></figure><h2 id="安装node" tabindex="-1"><a class="header-anchor" href="#安装node" aria-hidden="true">#</a> 安装Node</h2><p>使用管理员身份运行cmd，一定要使用管理员身份!!!</p><figure><img src="'+v+'" alt="cmd" tabindex="0" loading="lazy"><figcaption>cmd</figcaption></figure><ol><li>输入<code>nvm list available</code> 查看所有可供下载的Nodejs版本</li></ol><figure><img src="'+f+'" alt="node list" tabindex="0" loading="lazy"><figcaption>node list</figcaption></figure><ol start="2"><li><p>输入 <code>nvm install [version]</code> 安装所需的Nodejs版本,version为所需要的版本号</p></li><li><p>输入 <code>nvm list</code> 查看已安装版本的node</p></li><li><p>输入 <code>nvm use [version]</code> 切换使用指定的版本的node。</p></li><li><p>再次输入 <code>nvm list</code> ,如果版本号前带星号则表示切换成功, 或者输入 <code>nvm current</code> 显示当前版本</p></li></ol><figure><img src="'+h+'" alt="切换成功" tabindex="0" loading="lazy"><figcaption>切换成功</figcaption></figure><h2 id="更多相关命令" tabindex="-1"><a class="header-anchor" href="#更多相关命令" aria-hidden="true">#</a> 更多相关命令</h2><ul><li><code>nvm list</code> 查看已经安装的版本</li><li><code>nvm list installed</code> 查看已经安装的版本</li><li><code>nvm list available</code> 查看网络可以安装的版本</li><li><code>nvm version</code> 查看当前的版本</li><li><code>nvm install</code> 安装最新版本</li><li><code>nvm nvm use &lt;version&gt;</code> ## 切换使用指定的版本</li><li><code>node nvm ls</code> 列出所有版本 <code>nvm current</code>显示当前版本</li><li><code>nvm alias &lt;name&gt; &lt;version&gt;</code> ## 给不同的版本号添加别名</li><li><code>nvm unalias &lt;name&gt;</code> ## 删除已定义的别名</li><li><code>nvm reinstall-packages &lt;version&gt;</code> ## 在当前版本node环境下，重新全局安装指定版本号的npm包</li><li><code>nvm on</code> 打开nodejs控制</li><li><code>nvm off</code> 关闭nodejs控制</li><li><code>nvm proxy</code> 查看设置与代理</li><li><code>nvm node_mirror [url]</code> 设置或者查看<code>setting.txt</code>中的<code>node_mirror</code>，如果不设置的默认是 <code>Index of /dist/</code></li><li><code>nvm npm_mirror [url]</code> 设置或者查看<code>setting.txt</code>中的 <code>npm_mirror</code>,如果不设置的话默认的是： <code>https://github.com/npm/npm/archive/</code></li><li><code>nvm uninstall &lt;version&gt;</code> 卸载制定的版本</li><li><code>nvm use [version] [arch]</code> 切换制定的node版本和位数</li><li><code>nvm root [path]</code> 设置和查看root路径</li></ul>',21);function N(y,j){const o=c("ExternalLinkIcon");return a(),l("div",null,[_,e("p",null,[e("a",x,[t("下载地址"),d(o)])]),b])}const k=n(u,[["render",N],["__file","nvm.html.vue"]]);export{k as default};
