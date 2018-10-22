FROM ruby

RUN useradd jenkins --shell /bin/bash --create-home

USER jenkins

COPY Gemfile /tmp/

RUN cd /tmp && bundle install