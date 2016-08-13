# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.vm.box = "bento/ubuntu-14.04"

  # Prefer VMware Fusion before VirtualBox
  config.vm.provider "vmware_fusion" do |vf|
    vf.memory = 1024
  end
  config.vm.provider "virtualbox" do |vb|
    vb.memory = 1024
  end

  config.vm.host_name = "test.local"
  config.vm.network "private_network", ip: "192.168.50.12"

  config.vm.network "forwarded_port", guest: 8080, host: 8080
  config.vm.network "forwarded_port", guest: 3000, host: 3000
  config.vm.network "forwarded_port", guest: 4200, host: 4200

  config.vm.provision :salt do |salt|
    salt.minion_config = "../salt_master/etc/minion2"
    salt.minion_key = "../salt_master/keys/minion2.pem"
    salt.minion_pub = "../salt_master/keys/minion2.pub"
    salt.install_type = "stable"
    salt.verbose = true
    salt.colorize = true
    salt.bootstrap_options = "-P -c /tmp"
    salt.run_highstate = true
  end
end
