resource "aws_instance" "chat-app" {
  ami           = var.AMI
  instance_type = "t2.micro"
  key_name = var.KEY_NAME
  vpc_security_group_ids = [aws_security_group.app-web-ssh.id]
  
    tags = {
    Name = "chat-app"
    }

  provisioner "file" {
    source      = "app.sh"
    destination = "/tmp/app.sh"

    connection {
      type = "ssh"
      user = "ubuntu"
      private_key = "${file("~/Downloads/chat-app.pem")}"
      host = "${self.public_ip}"
      timeout = "5m"
      agent = false

    }
  }
    
  provisioner "remote-exec" {
    inline = [
      "sudo chmod +x /tmp/app.sh",
      "/tmp/app.sh args",
      
    ]
    connection {
      type = "ssh"
      user = "ubuntu"
      private_key = "${file("~/Downloads/chat-app.pem")}"
      host = "${self.public_ip}"
      timeout = "5m"
      agent = false
    }
  }
  }

 
  





