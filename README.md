# docker-101

## 描述Docker的网络模式以及区别，使用场景？

1.host模式
host表示容器共享宿主机的ip和端口号。容器中不会虚拟自己的网卡和ip，当查看容器ip的时候，其实是宿主机的ip。
如：创建nginx容器
docker run -tid --net=host --name nginx nginx:1.13.12
访问主机的 http://ip:80 其实就是容器的80端口，不用做端口映射了。

2.Container模式
container是共享容器ip地址和端口

docker run -tid --net=container:nginx --name mysql mysql:5.7

3.None模式
使用none模式时容器没有网卡、IP、路由等信息。需要自己为Docker容器添加网卡、配置IP等
docker run -tid --net=none --name nginx2 nginx:1.13.12

4.bridge模式
bridge模式是docker默认的网络模式，这种模式容器直接可以互相通讯，但无法和宿主机通讯。(bridge不支持自定义容器ip)