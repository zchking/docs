FROM ruby

RUN useradd jenkins --shell /bin/bash --create-home

USER jenkins

WORKDIR $HOME

COPY Gemfile ./

RUN bundle install