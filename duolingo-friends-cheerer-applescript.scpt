FasdUAS 1.101.10   ��   ��    k             l     ��  ��    ? 9 This applescript runs on two iterm terminal app windows.     � 	 	 r   T h i s   a p p l e s c r i p t   r u n s   o n   t w o   i t e r m   t e r m i n a l   a p p   w i n d o w s .   
  
 l     ��������  ��  ��        l     ��  ��      1. window:      �      1 .   w i n d o w :        l     ��  ��    7 1 Goes to project path and starts the node server.     �   b   G o e s   t o   p r o j e c t   p a t h   a n d   s t a r t s   t h e   n o d e   s e r v e r .      l     ��������  ��  ��        l     ��  ��      2. window:     �      2 .   w i n d o w :      l     ��   ��    "  Waits node server to start.      � ! ! 8   W a i t s   n o d e   s e r v e r   t o   s t a r t .   " # " l     �� $ %��   $ K E Sends curl request to the server to start duolingo automation script    % � & & �   S e n d s   c u r l   r e q u e s t   t o   t h e   s e r v e r   t o   s t a r t   d u o l i n g o   a u t o m a t i o n   s c r i p t #  ' ( ' l     �� ) *��   )    Closes the node js server    * � + + 4   C l o s e s   t h e   n o d e   j s   s e r v e r (  , - , l     �� . /��   .    Closes iterm terminal app    / � 0 0 4   C l o s e s   i t e r m   t e r m i n a l   a p p -  1 2 1 l     ��������  ��  ��   2  3 4 3 l     �� 5 6��   5 ; 5 create variable to duolingo-friends-cheerer app path    6 � 7 7 j   c r e a t e   v a r i a b l e   t o   d u o l i n g o - f r i e n d s - c h e e r e r   a p p   p a t h 4  8 9 8 l     �� : ;��   : 0 * todo: add project path from your computer    ; � < < T   t o d o :   a d d   p r o j e c t   p a t h   f r o m   y o u r   c o m p u t e r 9  = > = l     ?���� ? r      @ A @ m      B B � C C   A o      ���� 0 projectpath projectPath��  ��   >  D E D l     ��������  ��  ��   E  F G F l     �� H I��   H    handle iterm terminal app    I � J J 4   h a n d l e   i t e r m   t e r m i n a l   a p p G  K�� K l   � L���� L O    � M N M k    � O O  P Q P l   ��������  ��  ��   Q  R S R l   �� T U��   T 1 + start iterm by creating a window to access    U � V V V   s t a r t   i t e r m   b y   c r e a t i n g   a   w i n d o w   t o   a c c e s s S  W X W r     Y Z Y l    [���� [ I   ������
�� .Itrmnwwnnull��� ��� null��  ��  ��  ��   Z o      ���� 0 	newwindow 	newWindow X  \ ] \ l   ��������  ��  ��   ]  ^ _ ^ l   �� ` a��   ` , & create new session for current window    a � b b L   c r e a t e   n e w   s e s s i o n   f o r   c u r r e n t   w i n d o w _  c d c O    ! e f e r      g h g n     i j i 4   �� k
�� 
cobj k m    ������ j 2   ��
�� 
Trms h o      ���� 0 _new_session   f n     l m l 1    ��
�� 
Crtb m 1    ��
�� 
Crwn d  n o n l  " "��������  ��  ��   o  p q p l  " "�� r s��   r , & do the functionality with this window    s � t t L   d o   t h e   f u n c t i o n a l i t y   w i t h   t h i s   w i n d o w q  u v u O   " > w x w k   & = y y  z { z l  & &�� | }��   | ' ! start new window for node server    } � ~ ~ B   s t a r t   n e w   w i n d o w   f o r   n o d e   s e r v e r {   �  I  & +������
�� .Itrmslctnull���     obj ��  ��   �  � � � I  , 5���� �
�� .Itrmsntxnull���     obj ��   � �� ���
�� 
Text � b   . 1 � � � m   . / � � � � �  c d   � o   / 0���� 0 projectpath projectPath��   �  ��� � I  6 =���� �
�� .Itrmsntxnull���     obj ��   � �� ���
�� 
Text � m   8 9 � � � � � @ n o d e   d u o l i n g o - f r i e n d s - c h e e r e r . j s��  ��   x o   " #���� 0 _new_session   v  � � � l  ? ?��������  ��  ��   �  � � � l  ? ?�� � ���   � - ' create new session to start new window    � � � � N   c r e a t e   n e w   s e s s i o n   t o   s t a r t   n e w   w i n d o w �  � � � O   ? P � � � r   G O � � � n   G M � � � 4  J M�� �
�� 
cobj � m   K L������ � 2  G J��
�� 
Trms � o      ���� 0 _new_session   � n   ? D � � � 1   B D��
�� 
Crtb � 1   ? B��
�� 
Crwn �  � � � l  Q Q��������  ��  ��   �  � � � l  Q Q�� � ���   � , & do the functionality with this window    � � � � L   d o   t h e   f u n c t i o n a l i t y   w i t h   t h i s   w i n d o w �  � � � O   Q � � � � k   U � � �  � � � I  U Z������
�� .Itrmslctnull���     obj ��  ��   �  � � � l  [ [�� � ���   � 4 . wait until a process is running on port 4000     � � � � \   w a i t   u n t i l   a   p r o c e s s   i s   r u n n i n g   o n   p o r t   4 0 0 0   �  � � � W   [ m�� ���   � >   _ h � � � l  _ d ����� � I  _ d�� ���
�� .sysoexecTEXT���     TEXT � m   _ ` � � � � � 2 e c h o   $ ( l s o f   - t i   t c p : 4 0 0 0 )��  ��  ��   � m   d g � � � � �   �  � � � l  n n�� � ���   � ) # create curl request for the server    � � � � F   c r e a t e   c u r l   r e q u e s t   f o r   t h e   s e r v e r �  � � � I  n w���� �
�� .Itrmsntxnull���     obj ��   � �� ���
�� 
Text � m   p s � � � � � � c u r l   ' h t t p : / / l o c a l h o s t : 4 0 0 0 / c h e e r - f r i e n d s ? u r l = h t t p s : / / w w w . d u o l i n g o . c o m '   - - o u t p u t   / d e v / n u l l��   �  � � � l  x x�� � ���   � * $ kill the node server from port 4000    � � � � H   k i l l   t h e   n o d e   s e r v e r   f r o m   p o r t   4 0 0 0 �  � � � I  x ����� �
�� .Itrmsntxnull���     obj ��   � �� ���
�� 
Text � m   z } � � � � � 8 k i l l   - 9   $ ( l s o f   - t i   t c p : 4 0 0 0 )��   �  � � � l  � ��� � ���   � !  force close iterm terminal    � � � � 6   f o r c e   c l o s e   i t e r m   t e r m i n a l �  ��� � I  � ����� �
�� .Itrmsntxnull���     obj ��   � �� ���
�� 
Text � m   � � � � � � � D k i l l   - 9   $ ( p s   a u x   |   g r e p   - i   i T e r m 2 )��  ��   � o   Q R���� 0 _new_session   �  ��� � l  � ���������  ��  ��  ��   N m     � �|                                                                                  ITRM  alis      Macintosh HD                   BD ����	iTerm.app                                                      ����            ����  
 cu             Applications  /:Applications:iTerm.app/    	 i T e r m . a p p    M a c i n t o s h   H D  Applications/iTerm.app  / ��  ��  ��  ��       �� � ���   � ��
�� .aevtoappnull  �   � **** � �� ����� � ���
�� .aevtoappnull  �   � **** � k     � � �  = � �  K����  ��  ��   �   �  B�� �����������������~ ��} � ��| � � � ��� 0 projectpath projectPath
�� .Itrmnwwnnull��� ��� null�� 0 	newwindow 	newWindow
�� 
Crwn
�� 
Crtb
�� 
Trms
�� 
cobj�� 0 _new_session  
� .Itrmslctnull���     obj 
�~ 
Text
�} .Itrmsntxnull���     obj 
�| .sysoexecTEXT���     TEXT�� ��E�O� �*j E�O*�,�, 
*�-�i/E�UO� *j 
O*���%l O*��l UO*�,�, 
*�-�i/E�UO� 8*j 
O h�j a hY��O*�a l O*�a l O*�a l UOPUascr  ��ޭ