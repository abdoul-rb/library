FROM php:7.4

RUN apt-get update
RUN apt-get install -y libpq-dev postgresql libzip-dev \
    && docker-php-ext-install pdo pdo_pgsql pgsql zip \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=. --filename=composer
RUN mv composer /usr/local/bin/
