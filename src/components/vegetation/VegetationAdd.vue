<template>
    <div class="vegetation-add-wrap">
        <el-button type="primary" :icon="Back" @click="router.go(-1)">返回</el-button>
        <div class="tabs-wrap">
            <el-tabs tab-position="left">
                <el-tab-pane label="基本信息">
                    <el-row :gutter="20">
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">绿地名称</div>
                                <el-input v-model="vegetation.vegetationName" style="width:70%" placeholder="请输入">
                                </el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">绿地等级</div>
                                <el-input v-model="vegetation.vegetationLevel" style="width:70%" placeholder="请输入">
                                </el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">总面积(公顷)</div>
                                <el-input v-model="vegetation.totalArea" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">植物养护面积</div>
                                <el-input v-model="vegetation.conservationArea" style="width:70%" placeholder="请输入">
                                </el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="margin-top:16px">
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">一般建筑面积</div>
                                <el-input v-model="vegetation.normalBuildingArea" style="width:70%"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">古典建筑面积</div>
                                <el-input v-model="vegetation.classicalBuildingArea" style="width:70%"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">园路面积</div>
                                <el-input v-model="vegetation.gardenRoadArea" style="width:70%"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">广场面积</div>
                                <el-input v-model="vegetation.squareArea" style="width:70%"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="margin-top:16px">
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">水面面积</div>
                                <el-input v-model="vegetation.waterArea" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">其他面积</div>
                                <el-input v-model="vegetation.otherArea" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">厕所</div>
                                <el-input v-model="vegetation.toiletDistribution" style="width:70%" placeholder="请输入">
                                </el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">备注</div>
                                <el-input v-model="vegetation.remark" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20" style="margin-top:16px">
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">填报人</div>
                                <el-input v-model="vegetation.person" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <div class="form-item">
                                <div class="form-label">联系方式</div>
                                <el-input v-model="vegetation.phone" style="width:70%" placeholder="请输入"></el-input>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="乔灌木">
                    <div class="tab-pane-wrap">
                        <div class="form-title">乔木（落叶）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.qm_ly_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="qm_ly_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径4cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径8cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径10cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径15cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径20cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num5" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径30cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num6" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num" style="margin-top:12px">
                                <div class="label-num">胸径30cm以上</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_ly_num7" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">乔木（常绿）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.qm_cl_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="qm_cl_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径2cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_cl_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径4cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_cl_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径6cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_cl_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径8cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_cl_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">胸径8cm以上</div>
                                <el-input class="input-num" type="number" v-model="tree.qm_cl_num5" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">花灌木（落叶）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.gm_ly_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="gm_ly_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高100cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_ly_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高150cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_ly_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高200cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_ly_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高250cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_ly_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高300cm以上</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_ly_num5" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>
                        <div class="form-title">花灌木（常绿）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.gm_cl_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="gm_cl_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高100cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_cl_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高150cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_cl_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高200cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_cl_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高250cm以内</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_cl_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高300cm以上</div>
                                <el-input class="input-num" type="number" v-model="tree.gm_cl_num5" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">绿篱（单排）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.ll_dp_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ll_dp_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度0.6m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_dp_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_dp_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_dp_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以上</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_dp_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">绿篱（双排）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.ll_sp_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ll_sp_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度0.6m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_sp_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_sp_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_sp_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以上</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_sp_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">绿篱（片植）</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="tree.ll_pz_type" style="width:160px"
                                        placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ll_pz_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度0.6m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_pz_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_pz_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以内</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_pz_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">高度1.5m以上</div>
                                <el-input class="input-num" type="number" v-model="tree.ll_pz_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="水植地被">
                    <div class="tab-pane-wrap">
                        <div class="form-title">球形植物</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="grass.qx_type" style="width:160px" placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="qx_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">冠径100cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.qx_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">冠径150cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.qx_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">冠径200cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.qx_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">冠径250cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.qx_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">草坪</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="cp_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">草坪数量(m2)</div>
                                <el-input class="input-num" type="number" v-model="grass.cp_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苜蓿数量(m2)</div>
                                <el-input class="input-num" type="number" v-model="grass.cp_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">草花、地被</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ch_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">草本花卉数量(m2)</div>
                                <el-input class="input-num" type="number" v-model="grass.ch_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">宿根花卉数量(m2)</div>
                                <el-input class="input-num" type="number" v-model="grass.ch_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">爬地类植物</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="grass.pd_type" style="width:160px" placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="pd_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高30cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.pd_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高50cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.pd_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高70cm以内</div>
                                <el-input class="input-num" type="number" v-model="grass.pd_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">苗高70cm以上</div>
                                <el-input class="input-num" type="number" v-model="grass.pd_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">水生植物</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ss_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">塘植数量(株)</div>
                                <el-input class="input-num" type="number" v-model="grass.ss_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">盆植数量(盆)</div>
                                <el-input class="input-num" type="number" v-model="grass.ss_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">花坛、花境</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="ht_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">塘植数量(株)</div>
                                <el-input class="input-num" type="number" v-model="grass.ht_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">盆植数量(盆)</div>
                                <el-input class="input-num" type="number" v-model="grass.ht_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>

                        <div class="form-title">攀援植物</div>
                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-type">树种/规格</span>
                                    <el-input type="text" v-model="grass.py_type" style="width:160px" placeholder="请输入">
                                    </el-input>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="form-item">
                                    <span class="form-label-total">合计</span>
                                    <el-input type="text" v-model="py_total" style="width:160px" placeholder="自动计算"
                                        readonly>
                                    </el-input>
                                </div>
                            </el-col>
                        </el-row>

                        <el-row :gutter="12" style="margin-top:16px">
                            <el-col :span="4" class="item-num">
                                <div class="label-num">3年生</div>
                                <el-input class="input-num" type="number" v-model="grass.py_num1" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">4年生</div>
                                <el-input class="input-num" type="number" v-model="grass.py_num2" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">5年生</div>
                                <el-input class="input-num" type="number" v-model="grass.py_num3" placeholder="请输入">
                                </el-input>
                            </el-col>
                            <el-col :span="4" class="item-num">
                                <div class="label-num">6-8年生</div>
                                <el-input class="input-num" type="number" v-model="grass.py_num4" placeholder="请输入">
                                </el-input>
                            </el-col>
                        </el-row>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div style="margin-top:24px;text-align: center;">
            <el-button @click="handleSave" type="primary" style="width:160px">保存</el-button>
        </div>
    </div>
</template>
<script setup>
import { Back } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
import { useDatabase } from '../../common/use-database'
import { reactive, onMounted, toRefs, toRaw, computed } from 'vue'
import { usePid } from '../../common/use-pid'
import { ElMessage } from 'element-plus'

let db

const router = useRouter()
const baseData = reactive({
    vegetation: {
        vegetationName: '',
        vegetationLevel: '',
        totalArea: '',
        conservationArea: '',
        normalBuildingArea: '',
        classicalBuildingArea: '',
        gardenRoadArea: '',
        squareArea: '',
        waterArea: '',
        otherArea: '',
        toiletDistribution: '',
        remark: ''
    }
})

const treeData = reactive({
    tree: {
        gm_cl_num1: "",
        gm_cl_num2: "",
        gm_cl_num3: "",
        gm_cl_num4: "",
        gm_cl_num5: "",
        gm_cl_num6: "",
        gm_cl_total: 0,
        gm_cl_type: "",
        gm_ly_num1: "",
        gm_ly_num2: "",
        gm_ly_num3: "",
        gm_ly_num4: "",
        gm_ly_num5: "",
        gm_ly_num6: "",
        gm_ly_total: 0,
        gm_ly_type: "",
        ll_dp_num1: "",
        ll_dp_num2: "",
        ll_dp_num3: "",
        ll_dp_num4: "",
        ll_dp_total: 0,
        ll_dp_type: "",
        ll_pz_num1: "",
        ll_pz_num2: "",
        ll_pz_num3: "",
        ll_pz_num4: "",
        ll_pz_total: 0,
        ll_pz_type: "",
        ll_sp_num1: "",
        ll_sp_num2: "",
        ll_sp_num3: "",
        ll_sp_num4: "",
        ll_sp_total: 0,
        ll_sp_type: "",
        qm_cl_num1: "",
        qm_cl_num2: "",
        qm_cl_num3: "",
        qm_cl_num4: "",
        qm_cl_num5: "",
        qm_cl_total: 0,
        qm_cl_type: "",
        qm_ly_num1: "",
        qm_ly_num2: "",
        qm_ly_num3: "",
        qm_ly_num4: "",
        qm_ly_num5: "",
        qm_ly_num6: "",
        qm_ly_num7: "",
        qm_ly_total: 0,
        qm_ly_type: "",
    }
})

const grassData = reactive({
    grass: {
        ch_num1: "",
        ch_num2: "",
        ch_total: 0,
        cp_num1: "",
        cp_num2: "",
        cp_total: 0,
        ht_num1: "",
        ht_num2: "",
        ht_total: 0,
        pd_num1: "",
        pd_num2: "",
        pd_num3: "",
        pd_num4: "",
        pd_total: 0,
        pd_type: "",
        py_num1: "",
        py_num2: "",
        py_num3: "",
        py_num4: "",
        py_total: 0,
        py_type: "",
        qx_num1: "",
        qx_num2: "",
        qx_num3: "",
        qx_num4: "",
        qx_total: 0,
        qx_type: "",
        ss_num1: "",
        ss_num2: "",
        ss_total: 0,
    }
})
const { vegetation } = toRefs(baseData)
const { tree } = toRefs(treeData)
const { grass } = toRefs(grassData)

const qm_ly_total = computed(() => {
    const num1 = Number(treeData.tree.qm_ly_num1)
    const num2 = Number(treeData.tree.qm_ly_num2)
    const num3 = Number(treeData.tree.qm_ly_num3)
    const num4 = Number(treeData.tree.qm_ly_num4)
    const num5 = Number(treeData.tree.qm_ly_num5)
    const num6 = Number(treeData.tree.qm_ly_num6)
    const num7 = Number(treeData.tree.qm_ly_num7)
    return num1 + num2 + num3 + num4 + num5 + num6 + num7
})

const qm_cl_total = computed(() => {
    const num1 = Number(treeData.tree.qm_cl_num1)
    const num2 = Number(treeData.tree.qm_cl_num2)
    const num3 = Number(treeData.tree.qm_cl_num3)
    const num4 = Number(treeData.tree.qm_cl_num4)
    const num5 = Number(treeData.tree.qm_cl_num5)
    return num1 + num2 + num3 + num4 + num5
})

const gm_ly_total = computed(() => {
    const num1 = Number(treeData.tree.gm_ly_num1)
    const num2 = Number(treeData.tree.gm_ly_num2)
    const num3 = Number(treeData.tree.gm_ly_num3)
    const num4 = Number(treeData.tree.gm_ly_num4)
    const num5 = Number(treeData.tree.gm_ly_num5)
    return num1 + num2 + num3 + num4 + num5
})

const gm_cl_total = computed(() => {
    const num1 = Number(treeData.tree.gm_cl_num1)
    const num2 = Number(treeData.tree.gm_cl_num2)
    const num3 = Number(treeData.tree.gm_cl_num3)
    const num4 = Number(treeData.tree.gm_cl_num4)
    const num5 = Number(treeData.tree.gm_cl_num5)
    return num1 + num2 + num3 + num4 + num5
})

const ll_dp_total = computed(() => {
    const num1 = Number(treeData.tree.ll_dp_num1)
    const num2 = Number(treeData.tree.ll_dp_num2)
    const num3 = Number(treeData.tree.ll_dp_num3)
    const num4 = Number(treeData.tree.ll_dp_num4)
    return num1 + num2 + num3 + num4
})

const ll_sp_total = computed(() => {
    const num1 = Number(treeData.tree.ll_sp_num1)
    const num2 = Number(treeData.tree.ll_sp_num2)
    const num3 = Number(treeData.tree.ll_sp_num3)
    const num4 = Number(treeData.tree.ll_sp_num4)
    return num1 + num2 + num3 + num4
})

const ll_pz_total = computed(() => {
    const num1 = Number(treeData.tree.ll_pz_num1)
    const num2 = Number(treeData.tree.ll_pz_num2)
    const num3 = Number(treeData.tree.ll_pz_num3)
    const num4 = Number(treeData.tree.ll_pz_num4)
    return num1 + num2 + num3 + num4
})

const qx_total = computed(() => {
    const num1 = Number(grassData.grass.qx_num1)
    const num2 = Number(grassData.grass.qx_num2)
    const num3 = Number(grassData.grass.qx_num3)
    const num4 = Number(grassData.grass.qx_num4)
    return num1 + num2 + num3 + num4
})

const cp_total = computed(() => {
    const num1 = Number(grassData.grass.cp_num1)
    const num2 = Number(grassData.grass.cp_num2)
    return num1 + num2
})

const ch_total = computed(() => {
    const num1 = Number(grassData.grass.ch_num1)
    const num2 = Number(grassData.grass.ch_num2)
    return num1 + num2
})

const pd_total = computed(() => {
    const num1 = Number(grassData.grass.pd_num1)
    const num2 = Number(grassData.grass.pd_num2)
    const num3 = Number(grassData.grass.pd_num3)
    const num4 = Number(grassData.grass.pd_num4)
    return num1 + num2 + num3 + num4
})

const ss_total = computed(() => {
    const num1 = Number(grassData.grass.ss_num1)
    const num2 = Number(grassData.grass.ss_num2)
    return num1 + num2
})

const ht_total = computed(() => {
    const num1 = Number(grassData.grass.ht_num1)
    const num2 = Number(grassData.grass.ht_num2)
    return num1 + num2
})

const py_total = computed(() => {
    const num1 = Number(grassData.grass.py_num1)
    const num2 = Number(grassData.grass.py_num2)
    const num3 = Number(grassData.grass.py_num3)
    const num4 = Number(grassData.grass.py_num4)
    return num1 + num2 + num3 + num4
})

onMounted(async () => {
    db = await useDatabase();
})

const handleSave = async () => {
    const vegetaionItem = toRaw(vegetation.value)
    if (!vegetaionItem.vegetationName) {
        ElMessage.error('请输入绿地名称')
        return
    }
    vegetaionItem.pid = usePid().value
    const cid = await db.addVegetation(vegetaionItem)

    const treeItem = toRaw(tree.value)
    treeItem.qm_ly_total = qm_ly_total.value
    treeItem.qm_cl_total = qm_cl_total.value
    treeItem.gm_ly_total = gm_ly_total.value
    treeItem.gm_cl_total = gm_cl_total.value
    treeItem.ll_dp_total = ll_dp_total.value
    treeItem.ll_sp_total = ll_sp_total.value
    treeItem.ll_pz_total = ll_pz_total.value
    treeItem.cid = cid
    await db.addTree(treeItem)

    const grassItem = toRaw(grass.value)
    grassItem.qx_total = qx_total.value
    grassItem.cp_total = cp_total.value
    grassItem.ch_total = ch_total.value
    grassItem.pd_total = pd_total.value
    grassItem.ss_total = ss_total.value
    grassItem.ht_total = ht_total.value
    grassItem.py_total = py_total.value
    grassItem.cid = cid
    await db.addGrass(grassItem)

    router.go(-1)
}

</script>

<style scoped>
.tabs-wrap {
    margin-top: 16px;
}

.form-wrap+.form-wrap {
    margin-top: 36px;
}

.form-title {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #333;
    margin: 16px 0;
    font-size: 14px;
}

.form-title::after,
.form-title::before {
    content: '';
    background-color: #999;
    height: 1px;
    width: 45%;
}

.form-item {
    display: flex;
    align-items: center;
}

.form-label {
    width: 120px;
    margin-right: 12px;
    font-size: 14px;
    color: #666;
    text-align: right;
}

.form-label-type,
.form-label-total {
    margin-right: 12px;
    font-size: 14px;
    color: #666;
}

.item-num {
    display: flex;
    align-items: center;
}

.label-num {
    font-size: 14px;
    width: 160px;
    color: #666;
    text-align: right;
}

.input-num {
    width: auto;
}

.tab-pane-wrap {
    height: calc(100vh - 300px);
    overflow-y: auto;
    overflow-x: hidden;
}
</style>