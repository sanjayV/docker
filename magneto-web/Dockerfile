FROM ubuntu:16.04
RUN apt-get update -y --fix-missing

RUN apt-get install -y software-properties-common
RUN apt-get install -y python-software-properties

RUN apt-get install apache2 -y
RUN apt-get install vim -y
COPY config/apache2.conf /etc/apache2/apache2.conf
RUN service apache2 start

RUN apt-get install redis-server -y
RUN systemctl enable redis-server.service
COPY config/redis.conf /etc/redis/redis.conf
RUN service redis-server start

RUN LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
RUN apt-get update -y
RUN apt-get install -y php7.2
RUN apt-get install -y php7.2-xml php7.2-mbstring php7.2-mysqli php7.2-intl php7.2-gd php7.2-mysql php7.2-zip php7.2-soap php7.2-fpm php7.2-curl php7.2-bcmath php7.2-redis

COPY config/php.ini /etc/php/7.2/apache2/php.ini
RUN a2enmod rewrite
RUN service apache2 restart
COPY htdocs/ /var/www/html/

RUN apt-get install supervisor -y
COPY config/supervisord.conf /etc/supervisor/conf.d/
CMD ["/usr/bin/supervisord", "-n"]

WORKDIR /var/www/html
