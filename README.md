<!--
 * @Author: lijiahao
 * @Date: 2019-10-23 16:59:15
 * @LastEditors: superYipe
 * @LastEditTime: 2019-10-23 17:00:55
 -->
## 依赖的package

- [cli-tables](https://github.com/cli-table/cli-table3) 命令行中的表格
- [update-notifier](https://github.com/yeoman/update-notifier) npm 包的更新提示

## 统计这个仓库每个人提交了多少行代码

- [cloc](https://segmentfault.com/a/1190000008542123) 计算提交行数

```
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s\n", add, subs, loc }' -; done
```

## 使用 ndb 进行 debugger

```
npm install -g ndb
```