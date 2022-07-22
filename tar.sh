#! /bash/sh
cd vue3
npm run build
# z 通过gzip压缩或解压 c创建新的tar包 v显示详细的tar命令执行过程 f执行压缩文件的名称
# dist.tar.gz 压缩后文件 被压缩文件 dist
tar zcvf dist.tar.gz dist
# chmod命令是用来改变文件或目录权限的命令，但是只有文件的属主和超级用户root才能够执行这个命令。 + 加入 x execute 可执行权限 1
# chmod +x tar.sh
