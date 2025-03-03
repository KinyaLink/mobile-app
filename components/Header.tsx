import { View, Text, TextInput } from "react-native";
import React from "react";
import { IconAlignLeft } from "@tabler/icons-react-native";
import { BellIcon } from "lucide-react-native";

const Header = () => {
  return (
    <View className="flex-1 flex-row justify-between items-center w-full">
      <View className="flex-row items-center gap-4">
        <View>
          <IconAlignLeft color="#FFFFFF80" size={32} />
        </View>
        <View className="w-3/4 self-start">
          <TextInput
            className="bg-[#151515] rounded-full px-6 py-3 placeholder:text-white/50 placeholder:font-pregular"
            placeholder="Search..."
          />
        </View>
      </View>
      <View>
        <BellIcon color="#FFFFFF80" size={30} />
      </View>
    </View>
  );
};

export default Header;
