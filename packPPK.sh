#!/bin/bash
cd `dirname $0`
show=true
platform=""
flag=true

while getopts "yp:" arg #选项后面的冒号表示该选项需要参数
do
		case $arg in
			y)
				show=false
				;;
			p)
				if [ $OPTARG == 'ios' -o $OPTARG == 'android' ]; then
					platform=$OPTARG
				fi
				echo "a's arg:$OPTARG" #参数存在$OPTARG中
				;;
			?) #当有不认识的选项的时候arg为?
				echo "Only support -y for default clean cache or -p for platform[ios/android]"
		exit 1
		;;
		esac
done

# echo $show
if [ $show == true ]; then
	read -p "是否删除ppk缓存？[y/(n)]" result
fi

result=${result:-y}

if [ $result == 'n' -o $result == 'N' ]; then
	flag=false
fi

if [ $flag == true ]; then
	rm -rf ./build
fi

echo $platform
case $platform in
	android)
		npm run makeandroid
		;;
	ios)
		npm run makeios
		;;
	*)
		npm run makeandroid
		npm run makeios
		;;
esac