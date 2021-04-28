# 构建node镜像
FROM node:12-alpine
# 找一个目录存放我们的server代码, 相当于执行了cd /usr/src/docker-server
WORKDIR /src/server
# 复制当前目录内容 到容器中指定的应用根目录下
COPY . .
# 执行命令安装项目所需依赖
RUN yarn
# 让容器可以使用3000端口
EXPOSE 3000
# 容器启动后执行npm start脚本
CMD ["yarn", "start"]