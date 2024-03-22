sudo apt install nginx 
sudo apt update
sudo apt install git
git clone https://github.com/reactapp-projects/landing.git
cd landing
sudo apt install nginx
sudo ufw app list
sudo ufw enable
sudo ufw status
sudo ufw allow 'Nginx HTTP'
curl -4 icanhazip.com
sudo mkdir /var/www
sudo mkdir /var/www/13.53.70.93
sudo chmod 755 -R /var/www/13.53.70.93
cat ./default.conf > /etc/nginx/sites-available/13.53.70.93
sudo nginx -t 
sudo unlink /etc/nginx/sites-available/default 
sudo unlink /etc/nginx/sites-enabled/default
sudo unlink /etc/nginx/sites-enabled/13.53.70.93
sudo ln -s /etc/nginx/sites-available/13.53.70.93 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo nginx -t
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
source ~/.bashrc
nvm list-remote
nvm install v20.11.1
nvm use v20.11.1
node -v
npm install 
npm run build
cd build 
mv * /var/www/13.53.70.93