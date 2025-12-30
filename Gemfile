source "https://rubygems.org"

# 테마 및 Jekyll 핵심 엔진
gem "jekyll", "~> 4.3.1"
gem "sparrowx-jekyll-theme", path: "./" # sparrowx 테마 경로 지정

# _config.yml에서 사용하는 필수 플러그인
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
end

# 마크다운 파서 및 성능 향상
gem "kramdown-parser-gfm"
gem "webrick" # Ruby 3.0 이상 환경 대응
